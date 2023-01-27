(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{333:function(t,a,s){t.exports=s.p+"assets/img/OpenMQTTgateway_OpenHAB_Control.d6c2beb5.png"},395:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"integrate-openhab2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrate-openhab2"}},[t._v("#")]),t._v(" Integrate OPENHAB2")]),t._v(" "),a("h2",{attrs:{id:"auto-discovery-through-home-assistant-convention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#auto-discovery-through-home-assistant-convention"}},[t._v("#")]),t._v(" Auto discovery through home assistant convention")]),t._v(" "),a("p",[t._v("OpenMQTTGateway support autodiscovery of things for OpenHAB 2.4, so as to do that it rely on home assistant auto discovery convention.\nSo as to use the autodiscovery function you need to have:")]),t._v(" "),a("ul",[a("li",[t._v("The Jinga transformation addon installed")]),t._v(" "),a("li",[t._v("The Json transformation addon installed")])]),t._v(" "),a("p",[t._v("You need to set "),a("code",[t._v("OpenHABAutoDiscovery")]),t._v(" to true into "),a("code",[t._v("config_mqttDiscovery.h")]),t._v(" "),a("code",[t._v("#define OpenHABDiscovery true")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you are connecting to BLE devices it is highly recommended to set "),a("code",[t._v("filterConnectable")]),t._v(" to "),a("code",[t._v("true")]),t._v(" in "),a("RouterLink",{attrs:{to:"/use/ble.html#advanced-filter-out-connectable-devices"}},[t._v("BT configuration")]),t._v(". Otherwise you may encounter incomplete data.")],1)]),t._v(" "),a("p",[t._v("The things will appear in the inbox of the paperUI, add them and links the channels. You should see them into the control panel for further usage.\n"),a("img",{attrs:{src:s(333),alt:""}})]),t._v(" "),a("h2",{attrs:{id:"mqtt-2-manual-setup-openhab2-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-2-manual-setup-openhab2-4"}},[t._v("#")]),t._v(" MQTT 2 manual setup >=Openhab2.4")]),t._v(" "),a("p",[t._v("You should have an MQTT broker installed (either mosquitto or the OpenHAB2 embedded one)")]),t._v(" "),a("p",[t._v("In paper UI")]),t._v(" "),a("ul",[a("li",[t._v("In bindings add the MQTT Things binding")]),t._v(" "),a("li",[t._v("Inbox > MQTT Things binding > Add manually >MQTT Broker : configure your broker")]),t._v(" "),a("li",[t._v("Inbox > MQTT Things binding > Add manually >Generic MQTT Thing : select your previously configured broker as a bridge and enter your thing definition (example RF plug, weather station, PIR sensor)")]),t._v(" "),a("li",[t._v('Configuration > Things > "Your thing" : click on + and add one channel for each thing parameter (example for a weather station, you will have one channel for the temperature, one channel for the humidity etc..)')]),t._v(" "),a("li",[t._v("For a state channel define the MQTT topic like this:")])]),t._v(" "),a("h2",{attrs:{id:"for-a-mi-flora-or-mi-jia-temperature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-a-mi-flora-or-mi-jia-temperature"}},[t._v("#")]),t._v(" For a mi flora or mi jia temperature :")]),t._v(" "),a("p",[a("code",[t._v("home/+/BTtoMQTT/C47C9999D1B8")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Click on show more")])]),t._v(" "),a("li",[a("p",[t._v('And add in "Incoming values transformation"')])])]),t._v(" "),a("p",[a("code",[t._v("JSONPATH:$.tem")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Click on Save")])]),t._v(" "),a("li",[a("p",[t._v("Repeat for each channels and each things")])]),t._v(" "),a("li",[a("p",[t._v('Configuration > Things > "Your thing" : click on a channel and add 1 or several items per channel defining what you want to display in the sitemap\nor')])]),t._v(" "),a("li",[a("p",[t._v("Define your items in an item file like this by referring to your MQTT things channels:\nFor a mi flora and mi jia")])])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MI JIA")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" humidity\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Humidité air[%.1f %%]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("water"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:dc2222e6:humidite-mijia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" temperature \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Température[%.1f °C]"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:dc2222e6:temperature-mijia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" battery   \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Batterie capteur[%.1f %]"')]),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("volt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:dc2222e6:batterie-mijia"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MI FLORA")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" humidity_P\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hygrométrie plante[%.1f %%]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("water"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:1fb33334:humidite-miflora"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" temperature_P \t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Température plante[%.1f °C]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("temperature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:1fb33334:temperature-miflora"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" fertility_P\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fertilité plante[%.1f uS/cm]"')]),t._v(" \t            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:1fb33334:fertilite-miflora"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" lux_P\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Luminiosité plante[%.1f lux]"')]),t._v("              "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:1fb33334:lux-miflora"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"for-a-switch-channel-add-a-channel-by-choosing-the-type-on-off-switch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-a-switch-channel-add-a-channel-by-choosing-the-type-on-off-switch"}},[t._v("#")]),t._v(' For a switch channel, add a channel by choosing the type "On/Off switch"')]),t._v(" "),a("p",[t._v("define the MQTT state topic like this:\n"),a("code",[t._v("home/+/433toMQTT")])]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Click on show more")])]),t._v(" "),a("li",[a("p",[t._v('add in "Incoming values transformation"\n'),a("code",[t._v("JSONPATH:$.value")])])]),t._v(" "),a("li",[a("p",[t._v("define the command topic like this:\n"),a("code",[t._v("home/+/commands/MQTTto433")])])]),t._v(" "),a("li",[a("p",[t._v("add the value corresponding to ON state and to OFF state\n1312081\n1312084")])]),t._v(" "),a("li",[a("p",[t._v("Click on Save")])]),t._v(" "),a("li",[a("p",[t._v("Repeat for each channels and each things")])]),t._v(" "),a("li",[a("p",[t._v('Configuration > Things > "Your thing" : click on a channel and add 1 or several switch per channel\nor')])]),t._v(" "),a("li",[a("p",[t._v("Define your items in an item file like this by referring to your MQTT thing channel:")])])]),t._v(" "),a("p",[a("code",[t._v('Switch OMGSwitch "Prise 1" <poweroutlet> {channel="mqtt:topic:08998877:Power1"}')])]),t._v(" "),a("h1",{attrs:{id:"presence-detection-from-rickitaly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#presence-detection-from-rickitaly"}},[t._v("#")]),t._v(" Presence detection (from @rickitaly)")]),t._v(" "),a("p",[t._v("in thing file:")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thing")]),t._v(" mqtt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("topic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("omgentrance "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mqtt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("broker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("localBroker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Channels")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Type")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" blepresence "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"People Presence"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" stateTopic"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"home/home_presence/OpenMQTTGatewayEntrance"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("in item file")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OMG_BLE_Entrance")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BLE Entrance Detector"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mqtt:topic:omgentrance:blepresence"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Switch")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presence_Keys_Rick")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rick\'s Keys"')]),t._v("       "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("keyring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("People")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" gKeys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("expire"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"240s,OFF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("In rule file:")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("rule "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BLE Presence Detector"')]),t._v("\nwhen\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Item")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OMG_BLE_Entrance")]),t._v(" received update\nthen\nval "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OMG_BLE_Entrance")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state as "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StringType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString\nval "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" id  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JSONPATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$.id"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toString\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xx:xx:xx:xx:xx:xx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Presence_Keys_Rick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nend\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);