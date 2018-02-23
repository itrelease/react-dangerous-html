## What
React component that allows using script tags in provided html

[![Edit yp79k5l47z](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yp79k5l47z)

## Why
Because React strips script tags so it’s problematic to use embeds

[![Edit 2454kxkkon](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/2454kxkkon)

## How
`npm install react-dangerous-html`


```
import React from 'react';
import { render } from 'react-dom';
import DangerousHTML from 'react-dangerous-html';

const html = [
  `<div><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BfXF9gvh-Vv/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:62.5% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BfXF9gvh-Vv/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Rafiandi M0B- (@rafiandx)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-02-19T02:14:08+00:00">Feb 18, 2018 at 6:14pm PST</time></p></div></blockquote><script async defer src="//www.instagram.com/embed.js"></script></div>`,
  `<div><blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/BfXFcccgnjq/" data-instgrm-version="8" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/BfXFcccgnjq/" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Dinda (@dindasurel26)</a> on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2018-02-19T02:01:53+00:00">Feb 18, 2018 at 6:01pm PST</time></p></div></blockquote><script async defer src="//www.instagram.com/embed.js"></script></div>`,
  `<div><script>(function(d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s); js.id = id;js.src = 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v2.12';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));</script><div class="fb-video" data-href="https://www.facebook.com/nikita.liashkevich/videos/10215760861040214/"><blockquote cite="https://ru-ru.facebook.com/nikita.liashkevich/videos/10215760861040214/" class="fb-xfbml-parse-ignore"><a href="https://ru-ru.facebook.com/nikita.liashkevich/videos/10215760861040214/"></a><p>Сегодняшнее извержение вулкана Синабунг в Индонезии глазами японского метеорологического спутника Himawari-8. Мощно бомбануло, конечно. Анимацию клеил из хайрез geocolor снимков Himawari.  Кстати, команда аппарата запилила вот такой роскошный сайт, куда в реальном времени подгружаются сжатые снимки http://himawari8.nict.go.jp</p>Опубликовано <a href="https://www.facebook.com/nikita.liashkevich">Nikita Liashkevich</a> 19 февраля 2018 г.</blockquote></div></div>`,
  '<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr">One of the most incredible videos I’ve ever seen! <a href="https://twitter.com/hashtag/Sinabung?src=hash&amp;ref_src=twsrc%5Etfw">#Sinabung</a> <a href="https://twitter.com/hashtag/Sumatra?src=hash&amp;ref_src=twsrc%5Etfw">#Sumatra</a> <a href="https://twitter.com/hashtag/Indonesia?src=hash&amp;ref_src=twsrc%5Etfw">#Indonesia</a> <a href="https://t.co/TsLymrIRJw">pic.twitter.com/TsLymrIRJw</a></p>— UK Weather Live (@UKWeatherLive) <a href="https://twitter.com/UKWeatherLive/status/965485425187082240?ref_src=twsrc%5Etfw">February 19, 2018</a></blockquote><script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
  '<blockquote class="twitter-video" data-lang="en"><p lang="en" dir="ltr">Huge errupted of Mount Sinabung. <a href="https://t.co/Ood1dGKfS2">pic.twitter.com/Ood1dGKfS2</a></p>— ..e.. (@edykbarus) <a href="https://twitter.com/edykbarus/status/965422919642787840?ref_src=twsrc%5Etfw">February 19, 2018</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>'
];

const App = () => (
  <div>
    <DangerousHTML html={html.join('')} />
  </div>
);

render(<App />, document.getElementById('root'));
```