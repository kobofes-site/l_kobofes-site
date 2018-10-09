deploy:
	yarn build
	scp index.html koubousaihp:/home/koubousai/koubousai.xsrv.jp/public_html
	scp -r css js img koubousaihp:/home/koubousai/koubousai.xsrv.jp/public_html

prod:
	yarn build
	scp index.html koubousaihp:/home/koubousai/koubousai.com/public_html
	scp -r css js img koubousaihp:/home/koubousai/koubousai.com/public_html
