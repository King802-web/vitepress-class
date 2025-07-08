# 部署到Vercel的PowerShell脚本
Write-Host "准备部署到Vercel..."

# 确保已安装vercel CLI
if (!(Get-Command vercel -ErrorAction SilentlyContinue)) {
    Write-Host "正在安装Vercel CLI..."
    npm install -g vercel
}

# 部署到Vercel
Write-Host "正在部署到Vercel..."
vercel --prod

Write-Host "部署完成!" 