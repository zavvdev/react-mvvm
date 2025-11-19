# Common

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

lint:
	pnpm lint

lint-fix:
	pnpm lint:fix

format:
	pnpm format

# Web

web-dev:
	pnpm --filter @react-mvvm/web dev

web-preview:
	pnpm --filter @react-mvvm/web preview
