/**
 * The entrypoint for the action.
 */
import { installXGo } from './install-xgo'

async function run(): Promise<void> {
  await installXGo()
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
run()
