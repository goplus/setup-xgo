/**
 * Unit tests for the action's main functionality, src/main.ts
 *
 * These should be run as if the action was called from a workflow.
 * Specifically, the inputs listed in `action.yml` should be set as environment
 * variables following the pattern `INPUT_<INPUT_NAME>`.
 */

import * as core from '@actions/core'
import * as main from '../src/install-xgo'

// Mock the GitHub Actions core library
// const debugMock = jest.spyOn(core, 'debug')
const getInputMock = jest.spyOn(core, 'getInput')
// const setFailedMock = jest.spyOn(core, 'setFailed')
// const setOutputMock = jest.spyOn(core, 'setOutput')

// Mock the action's main function
const installXGoMock = jest.spyOn(main, 'installXGo')

describe('action', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('sets xgo version', async () => {
    // Set the action's inputs as return values from core.getInput()
    getInputMock.mockImplementation((name: string): string => {
      switch (name) {
        case 'xgo-version':
          return '1.5.0'
        default:
          return ''
      }
    })

    await main.installXGo()

    expect(installXGoMock).toHaveReturned()

    // expect(setOutputMock).toHaveBeenCalledWith('xgo-version', '1.5.0')
  })
})
