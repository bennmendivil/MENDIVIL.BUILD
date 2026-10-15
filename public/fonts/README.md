# Site fonts

The four local Latin WOFF2 files are byte-for-byte copies of the Google Fonts resources used by the approved design, captured on 2026-10-14. Families, requested weights, font-display: swap and Unicode ranges remain unchanged. Filenames include the first eight characters of the SHA-256 hash.

src/styles/fonts.css retains the original Google-hosted fallback subsets for characters outside Latin, so the existing international character coverage is preserved. Spanish accents and the site’s typography use the local Latin subset. Inter and JetBrains Mono reuse their original variable files across the existing requested weights; no new weights or instances are introduced.

Only Web-AEC anticipates Barlow Condensed 700 and 900, through route-conditional font preloads in index.html. Other routes discover fonts normally through this shared stylesheet.

Licenses are included alongside the files. Provenance and checksums follow.

[
  {
    "file": "barlow-condensed-700-latin-e3e520cb.woff2",
    "source": "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B46r2z3bWuYMBYro.woff2",
    "sha256": "e3e520cb7468f2efd60bc2ce96694567c3312f4ef414fffbe605e3ad146b24e6",
    "bytes": 14888
  },
  {
    "file": "barlow-condensed-900-latin-2036f7f4.woff2",
    "source": "https://fonts.gstatic.com/s/barlowcondensed/v13/HTxwL3I-JCGChYJ8VI-L6OO_au7B45L0z3bWuYMBYro.woff2",
    "sha256": "2036f7f4aacc7759dcf8c6be2bd5bbde873c25a860f24dca0530ad14d4937723",
    "bytes": 13940
  },
  {
    "file": "inter-latin-c9407645.woff2",
    "source": "https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2",
    "sha256": "c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4",
    "bytes": 48432
  },
  {
    "file": "jetbrains-mono-latin-2c32b9b3.woff2",
    "source": "https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbv2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKwBNntkaToggR7BYRbKPxDcwgknk-4.woff2",
    "sha256": "2c32b9b3ee358c119e210f6f5195f9bd34894d78a785ff2e95d60e718e400af4",
    "bytes": 31340
  }
]
