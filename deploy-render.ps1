# 部署到Render的PowerShell脚本
Write-Host "准备部署到Render..."

# 检查是否安装了render-cli
if (!(Get-Command render -ErrorAction SilentlyContinue)) {
    Write-Host "正在安装Render CLI..."
    npm install -g @render/cli
}

# 登录Render（如果需要）
# render login

# 部署到Render
Write-Host "正在部署到Render..."
render deploy

Write-Host "部署完成!" 