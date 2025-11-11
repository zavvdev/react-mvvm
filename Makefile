package:
	npx lerna create $(name) --yes --private

link-package:
	pnpm add "@react-mvvm/$(name)@workspace:*" --filter @react-mvvm/$(to)

install-deps:
	pnpm install

build:
	pnpm -r run build

test:
	pnpm -r test

run-web-dev:
	pnpm --filter @react-mvvm/web dev

preview-web:
	pnpm --filter @react-mvvm/web preview
