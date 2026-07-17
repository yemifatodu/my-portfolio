$file = "C:\Users\HP\my-portfolio\src\data\projects.js"
Copy-Item $file "$file.bak3" -Force

$content = Get-Content $file -Raw
$fail = @()

$pairs = @(
  @{
    old = 'method: "Excel • Tableau • Data Cleaning • EDA • Dashboarding • Visualization • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",'
    new = 'method: "Python • Excel • Tableau • Data Cleaning • EDA • Dashboarding • Survival Analysis • Class & Gender Impact • Historical Data Interpretation",'
  },
  @{
    old = 'impact: "Highlighted key survival drivers for modeling through descriptive analysis.",'
    new = 'impact: "40.6% sample survival rate vs. 31.9% historical - First Class survived at 65.6% vs. 23.9% in Third Class",'
  }
)

foreach ($p in $pairs) {
    if ($content.Contains($p.old)) {
        $content = $content.Replace($p.old, $p.new)
    } else {
        $fail += $p.old
    }
}

if ($fail.Count -gt 0) {
    Write-Host "WARNING: $($fail.Count) line(s) still did not match - NO changes saved this run." -ForegroundColor Red
    foreach ($f in $fail) { Write-Host "  MISSING: $f" -ForegroundColor Yellow }
    Write-Host "If this fails again, run: [byte[]]\$b = [System.IO.File]::ReadAllBytes('$file'); \$b[0..2]" -ForegroundColor Yellow
    Write-Host "  (checks for a BOM/encoding issue) and paste the result." -ForegroundColor Yellow
} else {
    Set-Content $file $content -Encoding utf8
    Write-Host "Both remaining fields replaced successfully." -ForegroundColor Green
    Write-Host "Verifying full entry..." -ForegroundColor Cyan
    Get-Content $file | Select-String -Pattern "titanic-survival-analysis" -Context 0,8
}
