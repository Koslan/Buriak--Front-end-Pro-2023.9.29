
import Nav from './nav';
import { Outlet } from 'react-router-dom';
 
function Root() {
    return (
        <div className='container'>
            <main>
                <Outlet/>
            </main>
            <aside>
                <Nav />
            </aside>
        </div>
    );
}

export default Root