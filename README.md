
# KWin Raise Together

Simple KWin Script implementing "Raise Together" just like Gnome Tiling Assistant Extension.

<center><img src="assets/logo.png" width="128" /></center>

![Showcase](assets/raise-together.gif)

When windows are tiled either using quick-tile or tiling layout functionality (mixed not supported, at least yet) and user raises (activates) the window that is part of that layout, all of the windows in that layout will be raised.

Tested on KDE Plasma 6.5.5 under Fedora 43 (Wayland)

# Installation
```sh
git clone https://github.com/gornius/kwin-raise-together
cd kwin-raise-together
kpackagetool6 --type=KWin/Script -i ./package
```
