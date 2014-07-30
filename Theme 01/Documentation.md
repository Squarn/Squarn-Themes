# Theme 01

*July 30, 2014*

## Changelog

**2.00**: Rewrote post body to be significantly shorter and less repetitive.  
**2.00**: Changed z-index of sidebar to be on top.  
**2.00**: Updated answer posts to support reblogged asks.
**1.11**: Fixed the z-index of the hover meta so that it works in chrome.  
**1.10**: Changed post notes to show post count in permalink.  
**1.10**: Added Favicon, RSS, and meta description.  
**1.10**: Added an adaptive, custom scrollbar (only works in webkit browsers like chrome and safari)  
**1.01**: Changed post images from "width: 500px" to "max-width: 500px". Silly mistake.  

## Documentation

This is somewhat of a complicated theme, but doesn't require much explanation for customization through the tumblr sidebar. It might require some experience with html, css, and tumblr markup to edit yourself (though, of course, this is a great way to learn and I would recommend it). The main aspects of customization for this theme are in the sidebar. The sidebar uses 2 trigger points for its transitions. By default, it will simply show the background image built in within the sidebar. When you scroll over anywhere in the sidebar, a description and small navigation (5 links total) are revealed. These originate in the middle of the image and spread down or up, respectively. When you hover your cursor over the image within the sidebar, a second description is revealed. This div will cover the image in the sidebar. Disabling transitions causes the three mentioned parts to display constantly in their final positions (as if you hovered over the sidebar image continuously).

### Specs & Features

- Layout Type: Single Column
- Sidebar Type: Long, Fixed
- Navigation Type: Sidebar
- Tags: Displayed
- Captions: Toggleable
- Links: 5
- Can Links Be Added: No
- Scrollbar: Custom
- Update Notices: Yes


### Warnings:

1. Extremely short posts (height-wise) will make it difficult to click the permalink in the transitioned single post navigation. This applies mostly to text posts that are only a line or 2 long.
