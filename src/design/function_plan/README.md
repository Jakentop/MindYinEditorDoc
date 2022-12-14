---
title: 详细设计
prev: ../
next: resources_design
---

# 详细设计

这里定义了前面功能点概述中提到的几个操作对象的元数据类图，通过这张图可以比较直观的看出交互逻辑中存在那些对象。后续我们会设计交互组件的关系（从物理IO到逻辑IO）这两块的抽象。


## 实体对象设计

在组件通用能力中我们简单的概括了工具的业务层与物理层之间是如何映射的，这里的思想其实借鉴了语言服务器，由于整个过程是在本地的因此他的传输延迟并不会很高，我计划设计基于文件（FileIO）、基于关系数据库的（SQLIO）、基于网络的、基于内存的。然而物理IO的接口抽象我们会在这里与大家分享，我会以FileIO作为基础简单的封装一个通用接口。

![20221018140702](https://img.jaken.top/image/20221018140702.png)

上图是简化的资源、资源片段、数据对象，等其中的基础字段以及他们之间的关系。这张类图描述了资源服务器中常见的对象相关信息，以及其中的关系。

## 资源对象设计

除了定义资源服务器IO对象之外，我们还需要定义一系列接口用来描述资源服务器对外暴露的功能。其实这些接口也比较简单，无非就是对上面的IO对象的CRUD等操作。在这里我们会使用渐进式的设计策略，现已FileIo实现功能为母版设计一套接口，并且在后续通过迭代扩充或者废弃部分的接口。

![20221018174755](https://img.jaken.top/image/20221018174755.png)

上图简单罗列了资源对象和IO对象的基础能力，后续会在FileIO组件中扩充更多的功能。
