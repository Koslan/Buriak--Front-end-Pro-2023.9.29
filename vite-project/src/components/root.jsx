
import Nav from './nav';
import { Outlet } from 'react-router-dom';
 
function Root() {
    return (
        <div className='appLayout'>
            <Nav />
            <main className='mainContent'>
                <Outlet />
            </main>
        </div>
    );
}

export default Root