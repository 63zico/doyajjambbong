Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"

$Root = Split-Path -Parent $PSScriptRoot
$OutDir = Join-Path $Root "public\images\menu\drinks\styled"
New-Item -ItemType Directory -Force -Path $OutDir | Out-Null

function New-Canvas {
  $bmp = New-Object System.Drawing.Bitmap 1200, 900
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  $rect = New-Object System.Drawing.Rectangle 0, 0, 1200, 900
  $brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, ([System.Drawing.Color]::FromArgb(251, 242, 226)), ([System.Drawing.Color]::FromArgb(229, 214, 193)), 20
  $g.FillRectangle($brush, $rect)
  $brush.Dispose()

  $rnd = New-Object System.Random 34
  for ($i = 0; $i -lt 2600; $i++) {
    $a = $rnd.Next(8, 24)
    $c = [System.Drawing.Color]::FromArgb($a, 126, 105, 82)
    $p = New-Object System.Drawing.Pen $c, 1
    $x = $rnd.Next(0, 1200)
    $y = $rnd.Next(0, 900)
    $g.DrawLine($p, $x, $y, ($x + $rnd.Next(-9, 10)), ($y + $rnd.Next(-2, 3)))
    $p.Dispose()
  }

  return @{ Bitmap = $bmp; Graphics = $g }
}

function Save-Jpeg($bmp, $path) {
  $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
  $params = New-Object System.Drawing.Imaging.EncoderParameters 1
  $params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter ([System.Drawing.Imaging.Encoder]::Quality), 94L
  $bmp.Save($path, $codec, $params)
  $params.Dispose()
}

function Draw-TableSet($g) {
  $shadow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(42, 58, 35, 20))
  $g.FillEllipse($shadow, 290, 670, 620, 86)
  $shadow.Dispose()

  $trayBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Rectangle 250, 520, 700, 190), ([System.Drawing.Color]::FromArgb(126, 73, 35)), ([System.Drawing.Color]::FromArgb(72, 41, 22)), 12
  $g.FillEllipse($trayBrush, 250, 520, 700, 190)
  $trayBrush.Dispose()

  $plate = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(249, 250, 246))
  $rim = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(45, 76, 100), 7)
  $red = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(196, 39, 44))
  $blue = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(36, 63, 91), 3)
  $g.FillEllipse($plate, 312, 470, 575, 205)
  $g.DrawEllipse($rim, 312, 470, 575, 205)
  $g.DrawEllipse($blue, 350, 495, 500, 150)
  for ($i = 0; $i -lt 7; $i++) {
    $x = 400 + ($i * 62)
    $g.FillEllipse($red, $x, 528, 28, 34)
  }
  $plate.Dispose(); $rim.Dispose(); $red.Dispose(); $blue.Dispose()
}

function Draw-LabelText($g, [string]$text, [int]$x, [int]$y, [int]$size, [System.Drawing.Color]$color) {
  $font = New-Object System.Drawing.Font "Arial", $size, ([System.Drawing.FontStyle]::Bold)
  $brush = New-Object System.Drawing.SolidBrush $color
  $sf = New-Object System.Drawing.StringFormat
  $sf.Alignment = [System.Drawing.StringAlignment]::Center
  $g.DrawString($text, $font, $brush, (New-Object System.Drawing.RectangleF ($x - 120), $y, 240, 80), $sf)
  $font.Dispose(); $brush.Dispose(); $sf.Dispose()
}

function Draw-Ice($g, [int]$x, [int]$y, [int]$count) {
  $rnd = New-Object System.Random ($x + $y + $count)
  for ($i = 0; $i -lt $count; $i++) {
    $ix = $x + $rnd.Next(-105, 105)
    $iy = $y + $rnd.Next(-60, 65)
    $b = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(82, 255, 255, 255))
    $p = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(100, 210, 225, 235), 2)
    $g.FillRectangle($b, $ix, $iy, $rnd.Next(32, 54), $rnd.Next(24, 42))
    $g.DrawRectangle($p, $ix, $iy, 42, 32)
    $b.Dispose(); $p.Dispose()
  }
}

function Draw-Mint($g, [int]$x, [int]$y) {
  $stem = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(44, 112, 63), 5)
  $leaf = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(56, 150, 74))
  $g.DrawLine($stem, $x, $y + 15, $x + 35, $y - 32)
  $g.DrawLine($stem, $x, $y + 18, $x - 28, $y - 22)
  $g.FillEllipse($leaf, $x + 20, $y - 45, 34, 20)
  $g.FillEllipse($leaf, $x - 48, $y - 32, 36, 20)
  $g.FillEllipse($leaf, $x - 10, $y - 46, 32, 20)
  $stem.Dispose(); $leaf.Dispose()
}

function Draw-LemonSlice($g, [int]$x, [int]$y, [int]$r, [System.Drawing.Color]$fill) {
  $outer = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(247, 214, 74))
  $inner = New-Object System.Drawing.SolidBrush $fill
  $pen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(255, 246, 178), 3)
  $g.FillEllipse($outer, $x - $r, $y - $r, $r * 2, $r * 2)
  $g.FillEllipse($inner, $x - $r + 6, $y - $r + 6, ($r - 6) * 2, ($r - 6) * 2)
  for ($a = 0; $a -lt 180; $a += 30) {
    $rad = $a * [Math]::PI / 180
    $g.DrawLine($pen, $x, $y, [int]($x + [Math]::Cos($rad) * ($r - 8)), [int]($y + [Math]::Sin($rad) * ($r - 8)))
  }
  $outer.Dispose(); $inner.Dispose(); $pen.Dispose()
}

function Save-GlassDrink($file, [System.Drawing.Color]$top, [System.Drawing.Color]$bottom, [string]$kind) {
  $c = New-Canvas
  $g = $c.Graphics
  Draw-TableSet $g

  $shadow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(55, 55, 35, 20))
  $g.FillEllipse($shadow, 453, 682, 300, 45)
  $shadow.Dispose()

  $glass = New-Object System.Drawing.Rectangle 445, 205, 310, 480
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $path.AddArc($glass.X, $glass.Y, $glass.Width, 78, 180, 180)
  $path.AddLine($glass.Right, $glass.Y + 39, $glass.Right - 42, $glass.Bottom)
  $path.AddArc($glass.X + 42, $glass.Bottom - 54, $glass.Width - 84, 54, 0, 180)
  $path.AddLine($glass.X + 42, $glass.Bottom, $glass.X, $glass.Y + 39)
  $path.CloseFigure()

  $liquidRect = New-Object System.Drawing.Rectangle 475, 275, 250, 350
  $drinkBrush = New-Object System.Drawing.Drawing2D.LinearGradientBrush $liquidRect, $top, $bottom, 90
  $oldClip = $g.Clip
  $g.SetClip($path)
  $g.FillRectangle($drinkBrush, $liquidRect)
  if ($kind -match "soda|tea|juice") { Draw-Ice $g 600 350 9 }
  $g.Clip = $oldClip
  $drinkBrush.Dispose()

  $glassFill = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(36, 255, 255, 255))
  $glassPen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(178, 255, 255, 255), 6)
  $edgePen = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(105, 70, 83, 92), 3)
  $g.FillPath($glassFill, $path)
  $g.DrawPath($glassPen, $path)
  $g.DrawPath($edgePen, $path)
  $g.DrawEllipse($glassPen, 445, 205, 310, 78)

  $highlight = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(80, 255, 255, 255))
  $g.FillRectangle($highlight, 500, 245, 26, 300)
  $g.FillRectangle($highlight, 680, 265, 15, 220)
  $highlight.Dispose()

  if ($kind -eq "blueberry") {
    $berry = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(52, 63, 154))
    for ($i = 0; $i -lt 12; $i++) { $g.FillEllipse($berry, 520 + (($i * 37) % 170), 470 + (($i * 23) % 110), 18, 18) }
    $berry.Dispose()
  }
  if ($kind -eq "strawberry" -or $kind -eq "passion") {
    $seed = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(90, 118, 50, 14))
    for ($i = 0; $i -lt 22; $i++) { $g.FillEllipse($seed, 515 + (($i * 23) % 190), 420 + (($i * 31) % 150), 7, 7) }
    $seed.Dispose()
  }
  if ($kind -eq "peach") {
    Draw-LemonSlice $g 705 285 42 ([System.Drawing.Color]::FromArgb(255, 174, 113))
  }
  if ($kind -eq "lemon") {
    Draw-LemonSlice $g 708 285 43 ([System.Drawing.Color]::FromArgb(255, 239, 140))
  }
  if ($kind -eq "orange") {
    Draw-LemonSlice $g 707 285 44 ([System.Drawing.Color]::FromArgb(255, 159, 42))
  }
  if ($kind -ne "milk") { Draw-Mint $g 555 255 }

  $path.Dispose(); $glassFill.Dispose(); $glassPen.Dispose(); $edgePen.Dispose()
  Save-Jpeg $c.Bitmap (Join-Path $OutDir $file)
  $g.Dispose(); $c.Bitmap.Dispose()
}

function Save-CanDrink($file, [System.Drawing.Color]$body1, [System.Drawing.Color]$body2, [string]$label, [System.Drawing.Color]$labelColor) {
  $c = New-Canvas
  $g = $c.Graphics
  Draw-TableSet $g
  $shadow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(65, 42, 32, 22))
  $g.FillEllipse($shadow, 510, 680, 210, 46)
  $shadow.Dispose()

  $rect = New-Object System.Drawing.Rectangle 505, 195, 205, 492
  $body = New-Object System.Drawing.Drawing2D.LinearGradientBrush $rect, $body1, $body2, 0
  $g.FillRectangle($body, $rect)
  $body.Dispose()
  $top = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(232, 232, 220))
  $edge = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(95, 70, 70, 70), 4)
  $g.FillEllipse($top, 505, 178, 205, 48)
  $g.DrawEllipse($edge, 505, 178, 205, 48)
  $g.FillEllipse($top, 505, 663, 205, 48)
  $g.DrawEllipse($edge, 505, 663, 205, 48)
  $shine = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(80, 255, 255, 255))
  $g.FillRectangle($shine, 540, 220, 24, 410)
  $g.FillRectangle($shine, 660, 230, 13, 370)
  $shine.Dispose()

  if ($label -eq "SPRITE") {
    $band = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(255, 247, 54, 71))
    $yellow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(246, 212, 45))
    $g.FillPolygon($band, @((New-Object System.Drawing.Point 505, 480), (New-Object System.Drawing.Point 710, 380), (New-Object System.Drawing.Point 710, 475), (New-Object System.Drawing.Point 505, 580)))
    $g.FillPolygon($yellow, @((New-Object System.Drawing.Point 505, 250), (New-Object System.Drawing.Point 710, 360), (New-Object System.Drawing.Point 710, 430), (New-Object System.Drawing.Point 505, 315)))
    $band.Dispose(); $yellow.Dispose()
  }
  if ($label -eq "ZERO") {
    $black = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(24, 24, 24))
    $g.FillRectangle($black, 505, 340, 205, 160)
    $black.Dispose()
  }
  Draw-LabelText $g $label 608 420 35 $labelColor
  $top.Dispose(); $edge.Dispose()
  Save-Jpeg $c.Bitmap (Join-Path $OutDir $file)
  $g.Dispose(); $c.Bitmap.Dispose()
}

function Save-GoodDay {
  $c = New-Canvas
  $g = $c.Graphics
  Draw-TableSet $g
  $colors = @(
    [System.Drawing.Color]::FromArgb(81, 166, 78),
    [System.Drawing.Color]::FromArgb(242, 128, 62),
    [System.Drawing.Color]::FromArgb(237, 184, 52)
  )
  for ($i = 0; $i -lt 3; $i++) {
    $x = 430 + ($i * 110)
    $y = 190 + (($i % 2) * 20)
    $shadow = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(40, 40, 30, 20))
    $g.FillEllipse($shadow, $x - 20, 660, 120, 36)
    $shadow.Dispose()
    $glass = New-Object System.Drawing.Drawing2D.LinearGradientBrush (New-Object System.Drawing.Rectangle $x, $y, 72, 470), ([System.Drawing.Color]::FromArgb(210, 232, 248, 224)), ([System.Drawing.Color]::FromArgb(86, 160, 207, 130)), 0
    $g.FillRectangle($glass, $x, $y + 95, 72, 365)
    $g.FillEllipse($glass, $x, $y + 75, 72, 42)
    $g.FillEllipse($glass, $x, $y + 438, 72, 42)
    $glass.Dispose()
    $cap = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(42, 117, 57))
    $g.FillRectangle($cap, $x + 14, $y + 48, 44, 54)
    $g.FillEllipse($cap, $x + 14, $y + 36, 44, 22)
    $cap.Dispose()
    $label = New-Object System.Drawing.SolidBrush ([System.Drawing.Color]::FromArgb(245, 250, 241))
    $g.FillRectangle($label, $x + 5, $y + 245, 62, 120)
    $accent = New-Object System.Drawing.SolidBrush $colors[$i]
    $g.FillEllipse($accent, $x + 19, $y + 276, 34, 34)
    $accent.Dispose(); $label.Dispose()
    Draw-LabelText $g "GOOD" ($x + 36) ($y + 252) 12 ([System.Drawing.Color]::FromArgb(35, 74, 48))
    Draw-LabelText $g "DAY" ($x + 36) ($y + 325) 15 ([System.Drawing.Color]::FromArgb(35, 74, 48))
    $line = New-Object System.Drawing.Pen ([System.Drawing.Color]::FromArgb(110, 255, 255, 255), 4)
    $g.DrawLine($line, $x + 14, $y + 125, $x + 14, $y + 610)
    $line.Dispose()
  }
  Save-Jpeg $c.Bitmap (Join-Path $OutDir "good-day-soju.jpg")
  $g.Dispose(); $c.Bitmap.Dispose()
}

Save-GoodDay
Save-CanDrink "soda-water.jpg" ([System.Drawing.Color]::FromArgb(218, 222, 220)) ([System.Drawing.Color]::FromArgb(126, 133, 132)) "SODA" ([System.Drawing.Color]::FromArgb(22, 42, 54))
Save-CanDrink "sprite.jpg" ([System.Drawing.Color]::FromArgb(32, 160, 64)) ([System.Drawing.Color]::FromArgb(7, 91, 42)) "SPRITE" ([System.Drawing.Color]::White)
Save-CanDrink "coke-zero.jpg" ([System.Drawing.Color]::FromArgb(210, 18, 28)) ([System.Drawing.Color]::FromArgb(26, 22, 22)) "ZERO" ([System.Drawing.Color]::White)
Save-CanDrink "coke.jpg" ([System.Drawing.Color]::FromArgb(225, 20, 35)) ([System.Drawing.Color]::FromArgb(140, 12, 26)) "COKE" ([System.Drawing.Color]::White)
Save-GlassDrink "peach-tea.jpg" ([System.Drawing.Color]::FromArgb(240, 88, 42)) ([System.Drawing.Color]::FromArgb(128, 38, 25)) "peach"
Save-GlassDrink "lemon-tea.jpg" ([System.Drawing.Color]::FromArgb(230, 157, 39)) ([System.Drawing.Color]::FromArgb(111, 61, 22)) "lemon"
Save-GlassDrink "orange-juice.jpg" ([System.Drawing.Color]::FromArgb(255, 188, 52)) ([System.Drawing.Color]::FromArgb(224, 92, 28)) "orange"
Save-GlassDrink "blueberry-soda.jpg" ([System.Drawing.Color]::FromArgb(226, 247, 255)) ([System.Drawing.Color]::FromArgb(44, 94, 194)) "blueberry"
Save-GlassDrink "thai-milk-tea.jpg" ([System.Drawing.Color]::FromArgb(233, 145, 54)) ([System.Drawing.Color]::FromArgb(147, 77, 26)) "milk"
Save-GlassDrink "milk-tea.jpg" ([System.Drawing.Color]::FromArgb(212, 149, 82)) ([System.Drawing.Color]::FromArgb(118, 70, 38)) "milk"
Save-GlassDrink "strawberry-soda.jpg" ([System.Drawing.Color]::FromArgb(255, 229, 238)) ([System.Drawing.Color]::FromArgb(226, 44, 75)) "strawberry"
Save-GlassDrink "passion-fruit-soda.jpg" ([System.Drawing.Color]::FromArgb(255, 234, 100)) ([System.Drawing.Color]::FromArgb(236, 110, 22)) "passion"

Write-Host "Generated drink card art in $OutDir"
