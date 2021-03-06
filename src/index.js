import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store'
import { theme, GlobalStyle } from './styles'
import * as serviceWorker from './serviceWorker'
import App from './Routes'

import './i18n'

import WebFont from 'webfontloader'

WebFont.load({
	google: {
		families: ['Fira+Sans:300,400,500,600'],
	},
})

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyle />
				<App />
			</>
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
