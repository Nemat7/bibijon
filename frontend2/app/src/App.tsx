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
import TehnoTtPage from './pages/standards/TehnoTtPage'
import VitamixPage from './pages/standards/VitamixPage'
import AntunPage from './pages/standards/AntunPage'
import FrankePage from './pages/standards/FrankePage'
import HennyPennyShkafPage from './pages/standards/HennyPennyShkafPage'
import PolairPage from './pages/standards/PolairPage'
import FrymasterFprePage from './pages/standards/FrymasterFprePage'
import HennyPenny590Page from './pages/standards/HennyPenny590Page'
import RobolabsTosterPage from './pages/standards/RobolabsTosterPage'
import GrilStarPage from './pages/standards/GrilStarPage'
import GrilWoodsonPage from './pages/standards/GrilWoodsonPage'
import TigerPage from './pages/standards/TigerPage'
import FabristeelPage from './pages/standards/FabristeelPage'
import PrincecastleTosterPage from './pages/standards/PrincecastleTosterPage'
import PrincecastleGrilPage from './pages/standards/PrincecastleGrilPage'
import SimecoVitrinaPage from './pages/standards/SimecoVitrinaPage'
import TtmPage from './pages/standards/TtmPage'
import HcwPage from './pages/standards/HcwPage'
import RobolabsLarPage from './pages/standards/RobolabsLarPage'
import FollettLarPage from './pages/standards/FollettLarPage'
import ScotsmanPage from './pages/standards/ScotsmanPage'
import IcematicPage from './pages/standards/IcematicPage'
import TrueMorozilnikPage from './pages/standards/TrueMorozilnikPage'
import SimecoMorozilnikPage from './pages/standards/SimecoMorozilnikPage'
import OrwakPage from './pages/standards/OrwakPage'
import AyrkingPage from './pages/standards/AyrkingPage'
import HobartPage from './pages/standards/HobartPage'
import SimicoSendvichPage from './pages/standards/SimicoSendvichPage'
import StoddartPage from './pages/standards/StoddartPage'
import PrincecastleShkafPage from './pages/standards/PrincecastleShkafPage'
import HennyPennyShkaf990Page from './pages/standards/HennyPennyShkaf990Page'
import SimicoFasovkaPage from './pages/standards/SimicoFasovkaPage'
import HatcoPage from './pages/standards/HatcoPage'
import TestoSaverisPage from './pages/standards/TestoSaverisPage'
import WinstonPage from './pages/standards/WinstonPage'
import FrymasterRe14Page from './pages/standards/FrymasterRe14Page'
import FabristeelFasovkaPage from './pages/standards/FabristeelFasovkaPage'
import DirectorPage from './pages/DirectorPage'
import RgmVvedeniePage from './pages/director/RgmVvedeniePage'
import UpravlyayKakVladelecPage from './pages/director/UpravlyayKakVladelecPage'
import RukovodiSerdcemPage from './pages/director/RukovodiSerdcemPage'
import KouchingPage from './pages/director/KouchingPage'
import SozdavayAtmosferuPage from './pages/director/SozdavayAtmosferuPage'
import PlanirovanieKadrovPage from './pages/director/PlanirovanieKadrovPage'
import ObuchayKomanduPage from './pages/director/ObuchayKomanduPage'
import PreimushchestvaKomandyPage from './pages/director/PreimushchestvaKomandyPage'
import RabotayEffektivnoPage from './pages/director/RabotayEffektivnoPage'
import OpytGosteyPage from './pages/director/OpytGosteyPage'
import ZashchitaBrendaPage from './pages/director/ZashchitaBrendaPage'
import PonimaniePlPage from './pages/director/PonimaniePlPage'
import KontrolRaskhodovPage from './pages/director/KontrolRaskhodovPage'
import PrognozirovaniyeProdazhPage from './pages/director/PrognozirovaniyeProdazhPage'
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
        <Route path="/standards/oborudovaniye/tehno-tt" element={<TehnoTtPage />} />
        <Route path="/standards/oborudovaniye/vitamix" element={<VitamixPage />} />
        <Route path="/standards/oborudovaniye/antunes" element={<AntunPage />} />
        <Route path="/standards/oborudovaniye/franke" element={<FrankePage />} />
        <Route path="/standards/oborudovaniye/henny-penny-shkaf" element={<HennyPennyShkafPage />} />
        <Route path="/standards/oborudovaniye/polair" element={<PolairPage />} />
        <Route path="/standards/oborudovaniye/frymaster-fpre214" element={<FrymasterFprePage />} />
        <Route path="/standards/oborudovaniye/henny-penny-590" element={<HennyPenny590Page />} />
        <Route path="/standards/oborudovaniye/robolabs-toster" element={<RobolabsTosterPage />} />
        <Route path="/standards/oborudovaniye/gril-star" element={<GrilStarPage />} />
        <Route path="/standards/oborudovaniye/gril-woodson" element={<GrilWoodsonPage />} />
        <Route path="/standards/oborudovaniye/tiger" element={<TigerPage />} />
        <Route path="/standards/oborudovaniye/fabristeel" element={<FabristeelPage />} />
        <Route path="/standards/oborudovaniye/princecastle-toster" element={<PrincecastleTosterPage />} />
        <Route path="/standards/oborudovaniye/princecastle-gril" element={<PrincecastleGrilPage />} />
        <Route path="/standards/oborudovaniye/simeco-vitrina" element={<SimecoVitrinaPage />} />
        <Route path="/standards/oborudovaniye/ttm" element={<TtmPage />} />
        <Route path="/standards/oborudovaniye/hcw" element={<HcwPage />} />
        <Route path="/standards/oborudovaniye/robolabs-lar" element={<RobolabsLarPage />} />
        <Route path="/standards/oborudovaniye/follett-lar" element={<FollettLarPage />} />
        <Route path="/standards/oborudovaniye/scotsman" element={<ScotsmanPage />} />
        <Route path="/standards/oborudovaniye/icematic" element={<IcematicPage />} />
        <Route path="/standards/oborudovaniye/true-morozilnik" element={<TrueMorozilnikPage />} />
        <Route path="/standards/oborudovaniye/simeco-morozilnik" element={<SimecoMorozilnikPage />} />
        <Route path="/standards/oborudovaniye/orwak" element={<OrwakPage />} />
        <Route path="/standards/oborudovaniye/ayrking" element={<AyrkingPage />} />
        <Route path="/standards/oborudovaniye/hobart" element={<HobartPage />} />
        <Route path="/standards/oborudovaniye/simeco-sendvich" element={<SimicoSendvichPage />} />
        <Route path="/standards/oborudovaniye/stoddart" element={<StoddartPage />} />
        <Route path="/standards/oborudovaniye/princecastle-shkaf" element={<PrincecastleShkafPage />} />
        <Route path="/standards/oborudovaniye/henny-penny-shkaf-990" element={<HennyPennyShkaf990Page />} />
        <Route path="/standards/oborudovaniye/simeco-fasovka" element={<SimicoFasovkaPage />} />
        <Route path="/standards/oborudovaniye/hatco" element={<HatcoPage />} />
        <Route path="/standards/oborudovaniye/testo-saveris" element={<TestoSaverisPage />} />
        <Route path="/standards/oborudovaniye/winston" element={<WinstonPage />} />
        <Route path="/standards/oborudovaniye/frymaster-re14" element={<FrymasterRe14Page />} />
        <Route path="/standards/oborudovaniye/fabristeel-fasovka" element={<FabristeelFasovkaPage />} />
        <Route path="/director" element={<DirectorPage />} />
        <Route path="/director/rgm-vvedenie" element={<RgmVvedeniePage />} />
        <Route path="/director/upravlyay-kak-vladelec" element={<UpravlyayKakVladelecPage />} />
        <Route path="/director/rukovodi-serdcem" element={<RukovodiSerdcemPage />} />
        <Route path="/director/kouching" element={<KouchingPage />} />
        <Route path="/director/sozdavay-atmosferu" element={<SozdavayAtmosferuPage />} />
        <Route path="/director/planirovanie-kadrov" element={<PlanirovanieKadrovPage />} />
        <Route path="/director/obuchay-komandu" element={<ObuchayKomanduPage />} />
        <Route path="/director/preimushchestva-komandy" element={<PreimushchestvaKomandyPage />} />
        <Route path="/director/rabotay-effektivno" element={<RabotayEffektivnoPage />} />
        <Route path="/director/opyt-gostey" element={<OpytGosteyPage />} />
        <Route path="/director/zashchita-brenda" element={<ZashchitaBrendaPage />} />
        <Route path="/director/ponimanie-pl" element={<PonimaniePlPage />} />
        <Route path="/director/kontrol-raskhodov" element={<KontrolRaskhodovPage />} />
        <Route path="/director/prognozirovanie-prodazh" element={<PrognozirovaniyeProdazhPage />} />
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
