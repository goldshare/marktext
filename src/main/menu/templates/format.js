import * as actions from '../actions/format'

export default function (keybindings) {
  return {
    id: 'formatMenuItem',
    label: 'F&ormat',
    submenu: [{
      id: 'strongMenuItem',
      label: 'Strong',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strong'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'strong')
      }
    }, {
      id: 'emphasisMenuItem',
      label: 'Emphasis',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.emphasis'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'em')
      }
    }, {
      id: 'underlineMenuItem',
      label: 'Underline',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.underline'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'u')
      }
    }, {
      type: 'separator'
    }, {
      id: 'superscriptMenuItem',
      label: 'Superscript',
      type: 'checkbox',
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'sup')
      }
    }, {
      id: 'subscriptMenuItem',
      label: 'Subscript',
      type: 'checkbox',
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'sub')
      }
    }, {
      id: 'highlightMenuItem',
      label: 'Highlight',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.highlight'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'mark')
      }
    }, {
      type: 'separator'
    }, {
      id: 'inlineCodeMenuItem',
      label: 'Inline Code',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-code'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'inline_code')
      }
    }, {
      id: 'inlineMathMenuItem',
      label: 'Inline Math',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.inline-math'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'inline_math')
      }
    }, {
      type: 'separator'
    }, {
      id: 'strikeMenuItem',
      label: 'Strike',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.strike'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'del')
      }
    }, {
      id: 'hyperlinkMenuItem',
      label: 'Hyperlink',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.hyperlink'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'link')
      }
    }, {
      id: 'imageMenuItem',
      label: 'Image',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('format.image'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'image')
      }
    }, {
      type: 'separator'
    }, {
      label: 'Clear Format',
      accelerator: keybindings.getAccelerator('format.clear-format'),
      click (menuItem, browserWindow) {
        actions.format(browserWindow, 'clear')
      }
    }]
  }
}
