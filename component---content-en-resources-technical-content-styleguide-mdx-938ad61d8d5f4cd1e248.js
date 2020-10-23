(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{DwH3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return f}));var o=n("zLVn"),i=(n("q1tI"),n("7ljp")),a=n("z1h2"),s={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}},c=l("Callout"),r=l("Button"),d=l("Icon"),m=l("List"),u=l("Link"),p=l("Box"),b=l("StatusBanner"),x=l("Tout"),h=l("Column"),j=l("Accordion"),O=l("Process"),y={_frontmatter:s},g=a.a;function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.mdx)(g,Object.assign({},y,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Style Guide"),Object(i.mdx)("p",null,"Sure, there are seemingly infinite ways you can customize page content, but try not to get carried away. These guidelines are meant to keep page content and component usage ",Object(i.mdx)("strong",{parentName:"p"}," ",Object(i.mdx)("em",{parentName:"strong"},"visually")," ")," consistent across this site, which improves the overall user and reader experience."),Object(i.mdx)("p",null,"Above all else, ",Object(i.mdx)("strong",{parentName:"p"}," ",Object(i.mdx)("em",{parentName:"strong"},"be consistent.")," ")),Object(i.mdx)(c,{icon:"lightbulb",mdxType:"Callout"},Object(i.mdx)("p",null,"For a broader overview of all components, check out the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/resources/technical-content/palette-recipes"}),"Component Palette"),". For more information about using components in MDX, read our other tutorials on ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"/develop/content"}),"Crafting Technical Content"),".")),Object(i.mdx)("h2",null,"Buttons"),Object(i.mdx)("p",null,"Buttons communicate actions that users can take."),Object(i.mdx)("p",null,"All buttons should"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Start with an “action” verb"),Object(i.mdx)("li",{parentName:"ul"},"Use sentence case"),Object(i.mdx)("li",{parentName:"ul"},"Express what action will occur when the button is clicked")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Primary (solid) buttons")," should be used for highest priority actions."),Object(i.mdx)(r,{primary:!0,to:"/resources/palette",mdxType:"Button"}," ","Primary"," "),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Secondary (solid) buttons")," should be used for high priority actions, alongside a primary button."),Object(i.mdx)(r,{primary:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Primary"," "),Object(i.mdx)(r,{secondary:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Secondary"," "),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Outline buttons")," should be used for medium priority actions alongside primary buttons."),Object(i.mdx)(r,{primary:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Primary"," "),Object(i.mdx)(r,{outline:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Outline"," "),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Icons")," can be added to any button and should be used to visually emphasize a button's action."),Object(i.mdx)(r,{primary:!0,to:"/resources/palette",mdxType:"Button"}," ",Object(i.mdx)(d,{name:"rocketchat",mdxType:"Icon"})," Join our chat"," "),Object(i.mdx)("h2",null),Object(i.mdx)("h4",null,Object(i.mdx)("strong",{parentName:"h4"},"Things to avoid"),":"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Using more than one icon in a button")),Object(i.mdx)(r,{to:"#",mdxType:"Button"},Object(i.mdx)(d,{name:"rocketchat",mdxType:"Icon"})," Rocket Chat"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Using two of the same kind of button side by side")),Object(i.mdx)(r,{primary:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Primary"," "),Object(i.mdx)(r,{primary:!0,inline:!0,to:"/resources/palette",mdxType:"Button"}," ","Primary"," "),Object(i.mdx)("h4",null,"Buttons vs. Links"),Object(i.mdx)("p",null,"Links are mostly used for navigation purposes (as opposed to actions), and usually appear within a sentence or directly following. Links are used to navigate to a different page in the site, navigate to a different site, or jump to an element on the same page."),Object(i.mdx)("h2",null),Object(i.mdx)("h2",null,"Lists"),Object(i.mdx)("p",null,"Lists are a continuous collection of related text or external links. List items have two parameters, 1-line/2-line and link/no link."),Object(i.mdx)("h4",null,"1-line, no link"),Object(i.mdx)(m,{mdxType:"List"},"List item",Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"List item")),Object(i.mdx)("h4",null,"1-line, link"),Object(i.mdx)(m,{mdxType:"List"},Object(i.mdx)(u,{to:"/",mdxType:"Link"},Object(i.mdx)("p",null,"List item")),Object(i.mdx)(u,{to:"/",mdxType:"Link"},Object(i.mdx)("p",null,"List item")),Object(i.mdx)(u,{to:"/",mdxType:"Link"},Object(i.mdx)("p",null,"List item"))),Object(i.mdx)("h4",null,"2-line, no link"),Object(i.mdx)(m,{mdxType:"List"},Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"Sub content")),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"Sub content")),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"Sub content"))),Object(i.mdx)("h4",null,"2-line, link"),Object(i.mdx)(m,{mdxType:"List"},Object(i.mdx)(u,{to:"https://makerdao.com",mdxType:"Link"},Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"Sub content")),Object(i.mdx)(u,{to:"/learn",mdxType:"Link"},Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"Sub content")),Object(i.mdx)(u,{to:"/learn",mdxType:"Link"},Object(i.mdx)("p",null,"List item"),Object(i.mdx)("p",null,"Sub content"))),Object(i.mdx)("p",null,"List items should start with a capital letter and be written in sentence case."),Object(i.mdx)("h4",null,Object(i.mdx)("strong",{parentName:"h4"},"Things to avoid"),":"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"putting 1-line list items in the same list as 2-line list items, and vice versa.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"putting a list item with no link in the same list as list items with links, and vice versa.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"putting a list inside a call-out, tout, or 2-column comparison."),Object(i.mdx)("h3",{parentName:"li"}),Object(i.mdx)(m,{mdxType:"List"},Object(i.mdx)("p",{parentName:"li"},"List item"),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("p",{parentName:"li"},"List item"),Object(i.mdx)("p",{parentName:"li"},"Sub Content")),Object(i.mdx)(u,{to:"/",mdxType:"Link"},Object(i.mdx)("p",{parentName:"li"},"List item"))))),Object(i.mdx)("p",null,"In the event that you need to list multiple ideas within a 2-column comparison, use a default, unstyled unordered list."),Object(i.mdx)("p",null,"Lists ",Object(i.mdx)("strong",{parentName:"p"},"can")," go inside process steppers and accordions, where it is appropriate to have more content."),Object(i.mdx)("h4",null,"List components vs. unstyled, unordered lists"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"List components")," should be used for collections of links, events, or other series of related, actionable content."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Unstyled, unordered lists")," should be used for series of ",Object(i.mdx)("strong",{parentName:"p"},"ideas")," that are directly connected to the text preceding, as seen in this style guide."),Object(i.mdx)("h2",null,"Status Banners"),Object(i.mdx)("p",null,"Status banners are concise, high-priority alerts that appear at the top of a page. Status banners are meant to catch a user’s attention quickly before proceeding to page content. Status banners can contain optional action items in the form of text buttons."),Object(i.mdx)("p",null,"Status banners should be used for messaging that informs or changes how a user will interact with the entirety of the page’s content, as it is the first thing the user will see (e.g. “Funding is closed” on a page about how to get funding). Think of a status banner as a preface to the page content, or a “before you proceed.”"),Object(i.mdx)("p",null,"Status banners should be placed ",Object(i.mdx)("strong",{parentName:"p"},"below breadcrumbs and above the page header")," and be succinct, focused, and only contain one message."),Object(i.mdx)(b,{warning:!0,mdxType:"StatusBanner"},Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Funding for projects is closed until September 1, 2020"))),Object(i.mdx)("h4",null,Object(i.mdx)("strong",{parentName:"h4"},"Things to avoid"),":"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Using status banners inside other components (touts, lists, two-column comparison, chocolate box, etc.)"),Object(i.mdx)("li",{parentName:"ul"},"Using more than one status banner per page")),Object(i.mdx)("h2",null,"Callouts"),Object(i.mdx)("p",null,"Callouts are highlighted blocks of text used to highlight medium-priority information within a page’s content. Callouts are meant to be helpful without being too disruptive."),Object(i.mdx)("p",null,"Callouts shoud clearly articulate the benefit of the feature and what it does and use icons to help communicate."),Object(i.mdx)(c,{icon:"search",secondary:!0,mdxType:"Callout"},Object(i.mdx)("p",null,"This is a callout with the (specified) secondary style and the \"search' icon from dai-ui-icons!")),Object(i.mdx)("h2",null,"Touts"),Object(i.mdx)("p",null,"Touts are cards of content used to highlight high or medium priority information. A primary use case for touts is guiding a reader to relevant information on another page."),Object(i.mdx)(x,{mdxType:"Tout"},Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h2",null,"Working on a bounty"),Object(i.mdx)("p",null,"See what's expected of you if you work on a Maker community bounty."),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"#"}),"Working on a bounty"))),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h2",null,"Say hi!"),Object(i.mdx)("p",null,"The best place to start is in our chat. Say hello and get to know us."),Object(i.mdx)(u,{mdxType:"Link"},"Community chat"))),Object(i.mdx)("h2",null,"2-column text"),Object(i.mdx)("p",null,"Two-column comparisons are a way to organize content that fits into two distinct, mutually exclusive, but related categories, most often for the purpose of comparison. Two-column text helps make important, text-only content more digestible and connected."),Object(i.mdx)(h,{mdxType:"Column"},Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h4",null,"Writer"),Object(i.mdx)("p",null,"Writers take initial notes, screenshots, and fix notes in post-editing with the availability of the recording."),Object(i.mdx)("p",null,"We recommend at least two people do this role, splitting up the work for the entire summary. Multiple writers have the advantage of supporting each other with formatting, screenshots, and quality assurance on sections that they are not taking the initial notes on.")),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h4",null,"Reviewer"),Object(i.mdx)("p",null,"Reviwers set up the initial working doc, do a full review of the summary after it's produced, quality check for formatting and semantic errors, and also submit the final version of the summary to GitHub and the Forum. Recommended to be done by one person."))),Object(i.mdx)("h2",null,"Accordion"),Object(i.mdx)("p",null,"Accordions are used to organize and condense content that does not need to be displayed on page load. This allows users to opt into seeing expanded based on their headers, which shortens scrolling through nonessential information."),Object(i.mdx)("p",null,'Accordions should generally have three or more "folds." In the case of there being only two folds, a two-column comparison will likely suffice.'),Object(i.mdx)("p",null,"An ideal use case for accordions is ",Object(i.mdx)("strong",{parentName:"p"},"FAQs"),", or series of questions and answers."),Object(i.mdx)(j,{mdxType:"Accordion"},Object(i.mdx)("p",null,"How should I format the headers of my accordion?"),Object(i.mdx)("p",null,'Every header in your accordion should be formatted the same. Avoid straying from the default text formatting, but if you must, make sure it is consistently applied to all of your accordion "folds."')),Object(i.mdx)(j,{mdxType:"Accordion"},Object(i.mdx)("p",null,"Can I change the icons at the end of my accordion?"),Object(i.mdx)("p",null,"Technically, but it creates confusion if there are different icons being used for the same purpose.")),Object(i.mdx)(j,{mdxType:"Accordion"},Object(i.mdx)("p",null,"Can I include other components inside an accordion?"),Object(i.mdx)("p",null,"Yes! Accordions are simply a way to minimize page content, not restrict it, so there is a good amount of freedom for what goes inside."),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"However,")," avoid putting high-priority content inside an accordion (like touts or buttons), because, well, if it's high-priority you don't want to hide it!")),Object(i.mdx)("h2",null),Object(i.mdx)("h2",null,"Process stepper"),Object(i.mdx)("p",null,"Process steppers are numbered lists that make important or complicated processes more digestible."),Object(i.mdx)(O,{mdxType:"Process"},Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h3",null,"Step 1"),Object(i.mdx)("p",null,"Make sure the headers and content of every step are formatted the same.")),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h3",null,"Step 2"),Object(i.mdx)("p",null,"Add your content! You can nest components inside of here if they further simplify instructions, though be wary of convoluting information with frivolous components.")),Object(i.mdx)(p,{mdxType:"Box"},Object(i.mdx)("h3",null,"Step 3"),Object(i.mdx)("p",null,"Admire your process stepper!"))))}f.isMDXComponent=!0}}]);
//# sourceMappingURL=component---content-en-resources-technical-content-styleguide-mdx-938ad61d8d5f4cd1e248.js.map