import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';

import './App.scss';
import DefaultLayout from './layouts/DefaultLayout';

function App() {
    return (
        <div className="App">
            <Routes>
                {routes.map((route, index) => {
                    let Page = route.element;
                    return (
                        <Route
                            key={index}
                            element={
                                <DefaultLayout>
                                    <Page />
                                </DefaultLayout>
                            }
                            path={route.path}
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
