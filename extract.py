import urllib.request, re
html = urllib.request.urlopen('https://cssfounder.us/css106/theme/travel-service/travel-agency/02/home.html').read().decode('utf-8')
urls = re.findall(r'url\([^)]+\)|<img[^>]+src=[\'\"]([^\'\"]+)[\'\"]', html)
for u in urls: print(u)
