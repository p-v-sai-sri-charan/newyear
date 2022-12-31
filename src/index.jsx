import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path="*" element={<App />} />
				<Route path=":name" element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>
)