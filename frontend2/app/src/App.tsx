import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import StandardsPage from './pages/standards/StandardsPage'
import ObsluzhivaniePage from './pages/standards/ObsluzhivaniePage'
import ServisArticle from './pages/articles/ServisArticle'
import SosArticle from './pages/articles/SosArticle'
import CrpArticle from './pages/articles/CrpArticle'
import GesArticle from './pages/articles/GesArticle'
import RfssArticle from './pages/articles/RfssArticle'
import SkautArticle from './pages/articles/SkautArticle'
import KomplektaciyaArticle from './pages/articles/KomplektaciyaArticle'
import VneshniyVidArticle from './pages/articles/VneshniyVidArticle'
import ProduktPage from './pages/standards/ProduktPage'
import RazvitiyePage from './pages/standards/RazvitiyePage'
import NaborPage from './pages/standards/NaborPage'
import PprPage from './pages/standards/PprPage'
import ObshheniePage from './pages/standards/ObshheniePage'
import HimicheskiyePage from './pages/standards/HimicheskiyePage'
import UpravleniyePage from './pages/standards/UpravleniyePage'
import PravilaBezopasnostiPage from './pages/standards/PravilaBezopasnostiPage'
import BscPage from './pages/standards/BscPage'
import BrendShefPage from './pages/standards/BrendShefPage'
import PlPage from './pages/standards/PlPage'
import InventarizaciyaPage from './pages/standards/InventarizaciyaPage'
import KrizisPage from './pages/standards/KrizisPage'
import ProdazhiPage from './pages/standards/ProdazhiPage'
import OtpbPage from './pages/standards/OtpbPage'
import OtkrytiyePage from './pages/standards/OtkrytiyePage'
import RgsPage from './pages/standards/RgsPage'
import OborudovaniyePage from './pages/standards/OborudovaniyePage'
import SkycoldPage from './pages/standards/SkycoldPage'
import SimecoOthodPage from './pages/standards/SimecoOthodPage'
import MarmitPage from './pages/standards/MarmitPage'
import CleaningCaptainPage from './pages/standards/CleaningCaptainPage'
import KurinnyeKuskiORArticle from './pages/articles/KurinnyeKuskiORArticle'

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/standards" element={<StandardsPage />} />
        <Route path="/standards/obsluzhivanie" element={<ObsluzhivaniePage />} />
        <Route path="/standards/produkt" element={<ProduktPage />} />
        <Route path="/standards/razvitiye" element={<RazvitiyePage />} />
        <Route path="/standards/razvitiye/nabor" element={<NaborPage />} />
        <Route path="/standards/razvitiye/ppr" element={<PprPage />} />
        <Route path="/standards/razvitiye/obshhenie" element={<ObshheniePage />} />
        <Route path="/standards/himicheskiye" element={<HimicheskiyePage />} />
        <Route path="/standards/himicheskiye/cleaning-captain" element={<CleaningCaptainPage />} />
        <Route path="/standards/upravleniye" element={<UpravleniyePage />} />
        <Route path="/standards/upravleniye/pravila-bezopasnosti" element={<PravilaBezopasnostiPage />} />
        <Route path="/standards/upravleniye/bsc" element={<BscPage />} />
        <Route path="/standards/upravleniye/brend-shef" element={<BrendShefPage />} />
        <Route path="/standards/upravleniye/pl" element={<PlPage />} />
        <Route path="/standards/upravleniye/inventarizaciya" element={<InventarizaciyaPage />} />
        <Route path="/standards/upravleniye/krizis" element={<KrizisPage />} />
        <Route path="/standards/upravleniye/prodazhi" element={<ProdazhiPage />} />
        <Route path="/standards/upravleniye/otpb" element={<OtpbPage />} />
        <Route path="/standards/upravleniye/otkrytiye" element={<OtkrytiyePage />} />
        <Route path="/standards/upravleniye/rgs" element={<RgsPage />} />
        <Route path="/standards/oborudovaniye" element={<OborudovaniyePage />} />
        <Route path="/standards/oborudovaniye/skycold" element={<SkycoldPage />} />
        <Route path="/standards/oborudovaniye/simeco-othod" element={<SimecoOthodPage />} />
        <Route path="/standards/oborudovaniye/marmit" element={<MarmitPage />} />
        <Route path="/standards/produkt/kurinnye-kuski-or" element={<KurinnyeKuskiORArticle />} />
        <Route path="/standards/obsluzhivanie/servis" element={<ServisArticle />} />
        <Route path="/standards/obsluzhivanie/sos" element={<SosArticle />} />
        <Route path="/standards/obsluzhivanie/crp" element={<CrpArticle />} />
        <Route path="/standards/obsluzhivanie/ges" element={<GesArticle />} />
        <Route path="/standards/rfss" element={<RfssArticle />} />
        <Route path="/standards/obsluzhivanie/skaut" element={<SkautArticle />} />
        <Route path="/standards/obsluzhivanie/komplektaciya" element={<KomplektaciyaArticle />} />
        <Route path="/standards/obsluzhivanie/vneshniy-vid" element={<VneshniyVidArticle />} />
      </Route>
    </Routes>
  )
}
