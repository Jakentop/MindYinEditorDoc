if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const r=e=>a(e,i),b={module:{uri:i},exports:d,require:r};s[i]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(c(...e),d)))}}define(["./workbox-2db7c85a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.1e89b818.js",revision:"309987a3454d6de159c0a45a3255980d"},{url:"assets/404.html.bcc2e3cb.js",revision:"75200cbf85576265f7466000c73b3f5f"},{url:"assets/app.829ede0c.js",revision:"ede39770e2a0dad13c79aa6dc1b91a71"},{url:"assets/auto.56c9cb2e.js",revision:"1af7b89403d96b406782cd203249d58d"},{url:"assets/disable.html.012f4874.js",revision:"a726c189d64f9c648db9e0d480f37810"},{url:"assets/disable.html.e54bdb4b.js",revision:"637c69078cefd558f798e464417a3617"},{url:"assets/encrypt.html.7fd59a42.js",revision:"d2a9d4a48cce4bdbb3201c94c19e30f0"},{url:"assets/encrypt.html.df5bdfeb.js",revision:"37a4f05322fb355d485a4a86e31c345f"},{url:"assets/flowchart.parse.1479ec3f.js",revision:"93ee4658efd463b82af7bc1b894a96d4"},{url:"assets/giscus.9450116b.js",revision:"392635d8b4f5a440e4c3479328777254"},{url:"assets/highlight.esm.9b852bc5.js",revision:"7755765e29eda27238d3160a257e85bd"},{url:"assets/index.d2b3e8c7.js",revision:"53c8d7dbc21ecd3bccbf1c2322dd0cca"},{url:"assets/index.html.128270e3.js",revision:"da20bfacc304d015d89ff847c44ddafe"},{url:"assets/index.html.252972c1.js",revision:"8b97f417cef7eb22a5378e448ef56bda"},{url:"assets/index.html.31864912.js",revision:"8f87a6b1870266e0875d5f1dcc64ced3"},{url:"assets/index.html.a055e6f5.js",revision:"04345e826ab7256f4bcdc2007ebd226a"},{url:"assets/index.html.b240618e.js",revision:"aa3ac0e308fb286f5a7262a07a018d27"},{url:"assets/index.html.d1137c80.js",revision:"8f87a6b1870266e0875d5f1dcc64ced3"},{url:"assets/index.html.d479259a.js",revision:"df9a35e48cbd79026f6efd5dffd94790"},{url:"assets/index.html.e60b6827.js",revision:"debca69af0826211d638343529ddf277"},{url:"assets/index.html.ebf9704d.js",revision:"ba42acb7df64cd65b69d7e55b9f8a21d"},{url:"assets/index.html.f1e9f363.js",revision:"45d3b8d501af2210cb97ac1082389db1"},{url:"assets/index.html.f47f86b9.js",revision:"e6668e40195af0776ebd51ba6f1a431f"},{url:"assets/index.html.fb6d3620.js",revision:"e2a5a5c077073fa57df60e43265479b4"},{url:"assets/KaTeX_AMS-Regular.0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular.30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular.68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold.07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold.1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold.de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular.3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular.5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular.ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold.74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold.9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold.9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular.1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular.51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular.5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold.0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold.138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold.c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic.70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic.99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic.a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic.0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic.97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic.f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular.c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular.c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular.d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic.850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic.dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic.f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic.08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic.7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic.8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold.1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold.e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold.ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic.00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic.3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic.91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular.11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular.68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular.f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular.036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular.1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular.d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular.6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular.95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular.c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular.2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular.a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular.d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular.500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular.6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular.99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular.a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular.c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular.71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular.e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular.f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic.38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic.5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic.8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm.77e8db25.js",revision:"0d05be8d1ccc17a6f2270457575848a1"},{url:"assets/markdown.html.38437872.js",revision:"75b22b0d874d07685abb2e8383bc3887"},{url:"assets/markdown.html.824a41e7.js",revision:"740ff0fb2ebfcfdbe06c7c12fcb3d658"},{url:"assets/math.esm.cb9d4be3.js",revision:"e77d289bc577da4e7341dc5a62209df1"},{url:"assets/mermaid.esm.min.0e041931.js",revision:"481e9564c28a71aed6f3c286b4911f29"},{url:"assets/notes.esm.62c5f19d.js",revision:"b055b0fe912d3e63c622ee92caf08028"},{url:"assets/page.html.4186bc50.js",revision:"05c6c415f129566cae02aeae831dbf22"},{url:"assets/page.html.f11e2e09.js",revision:"329f2705fa7d3b5c5329c0fd8c289a7b"},{url:"assets/photoswipe.esm.f594e77b.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/reveal.esm.41ec5d7f.js",revision:"40ef902ff74efca41d50e4c94edb2b83"},{url:"assets/search.esm.04894411.js",revision:"7d8008309758cac57a4dd66a633819ba"},{url:"assets/slides.html.62c4b215.js",revision:"4d551a1add0d89a891cfa3ae86bd8d54"},{url:"assets/slides.html.6e6a7417.js",revision:"fbf0d8fdc71ebb777fcebe1f67be813b"},{url:"assets/source-sans-pro-italic.05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic.ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic.d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular.c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular.d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular.dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold.a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold.b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold.ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic.7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic.dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic.e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style.38af5f57.css",revision:"b5ded053a6616ce53f64907d6f62cb46"},{url:"assets/vue-repl.7eb0d590.js",revision:"05f74f88ab7f418bf68096335639c6bc"},{url:"assets/VuePlayground.8f0a2410.js",revision:"a7cc69e9356677aed77b195a875e6ae3"},{url:"assets/zoom.esm.78977eba.js",revision:"8b3ee4f6f71ef2a7c85901cba6d23344"},{url:"assets/功能点概述.html.4a4dd964.js",revision:"6ccce7b4d4c9dcc51bc9c694f24d4402"},{url:"assets/功能点概述.html.7700ec2e.js",revision:"bbf4d6c434bcf58a00a92296e2ccffeb"},{url:"assets/开发计划.html.3d0d240d.js",revision:"a6463d45a02bff8add07823e951ff279"},{url:"assets/开发计划.html.5d559b97.js",revision:"224c26fa50bcce6a78db714b7fcf22ff"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"e29368756fad85f8578c55541fe28e07"},{url:"demo/disable.html",revision:"4c904e3cd4e4af48b59a6f0f740a2bf9"},{url:"demo/encrypt.html",revision:"0b795fd6f6865b50c071b2a987d93166"},{url:"demo/index.html",revision:"daa6eb5aa6111feff50f103d4b67a298"},{url:"demo/markdown.html",revision:"4c22bbd6422732fcde0caf1f26507f8a"},{url:"demo/page.html",revision:"1e27b0230accd2f276a3cc41097a11b6"},{url:"design/design_doc/index.html",revision:"97058c3287501f0112a44b03606ab5b0"},{url:"design/design_doc/功能点概述.html",revision:"ad44ccd9833e5185053089d888332997"},{url:"design/design_doc/开发计划.html",revision:"ffc8a92fd0e41c17eb9b69dacd7dfd16"},{url:"design/function_plan/index.html",revision:"1bd458c3a70cfabc83402c8d99603b29"},{url:"design/index.html",revision:"2f307cc319bb5e7d161744a42612a3ae"},{url:"docs/index.html",revision:"94b4e7f6945da923bfcee3e401705215"},{url:"index.html",revision:"ec9b6c4cc423ecdbb9a31590a72f563e"},{url:"slides.html",revision:"e2a0cce920c32f6affc6374c7d0c5872"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
