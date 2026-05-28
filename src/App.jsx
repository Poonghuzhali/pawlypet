import { HashRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import ShopByBreedPage from './pages/ShopByBreedPage'
import DogPage from './pages/DogPage'
import CatPage from './pages/CatPage'
import SmallPetsPage from './pages/SmallPetsPage'
import ConsultVetPage from './pages/ConsultVetPage'
import CartPage from './pages/CartPage'
import PaymentPage from './pages/PaymentPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import TrackOrderPage from './pages/TrackOrderPage'
import FavoritesPage from './pages/FavoritesPage'
import AccountSettingsPage from './pages/AccountSettingsPage'
import MyPetsPage from './pages/MyPetsPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import SettingsPage from './pages/SettingsPage'
import DogFoodPage from './pages/DogFoodPage'
import DogGroomingPage from './pages/DogGroomingPage'
import DogHealthPage from './pages/DogHealthPage'
import DogToysPage from './pages/DogToysPage'
import ProductDetailPage from './pages/ProductDetailPage'

export default function App() {
  return (
    <HashRouter>
      <CartProvider>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop-by-breed" element={<ShopByBreedPage />} />
        <Route path="/dog" element={<DogPage />} />
        <Route path="/dog/food" element={<DogFoodPage />} />
        <Route path="/dog/grooming" element={<DogGroomingPage />} />
        <Route path="/dog/health" element={<DogHealthPage />} />
        <Route path="/dog/toys" element={<DogToysPage />} />
        <Route path="/cat" element={<CatPage />} />
        <Route path="/small-pets" element={<SmallPetsPage />} />
        <Route path="/consult-vet" element={<ConsultVetPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<PaymentPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/track-order" element={<TrackOrderPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/account" element={<AccountSettingsPage />} />
        <Route path="/account/my-pets" element={<MyPetsPage />} />
        <Route path="/account/orders" element={<OrderHistoryPage />} />
        <Route path="/account/settings" element={<SettingsPage />} />
        <Route path="/dog/product/wilderness-salmon" element={<ProductDetailPage />} />
        </Routes>
      </CartProvider>
    </HashRouter>
  )
}
