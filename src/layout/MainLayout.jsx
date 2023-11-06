import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainLayout = () => {
    return (
        < >

            <div className='mx-5'>
                <nav className='max-w-[1520px] mx-auto'>
                    <Navbar />
                </nav>

                <main className='max-w-[1520px] mx-auto'>
                    <Outlet />
                </main>
            </div>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default MainLayout;