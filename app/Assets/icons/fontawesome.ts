
import { library } from '@fortawesome/fontawesome-svg-core'; // core
import { faDownload, faCaretDown, faIdCardClip, faCode, faRankingStar, faCommentDots, faMoon, faSun, faEnvelope, faArrowUpRightFromSquare, faClipboardUser, faClipboardQuestion, faClipboardCheck, faClipboardList, faFaceSmile, faShieldHalved, faScaleBalanced, faPen, faServer, faDatabase, faCookie, faCopyright, faUserShield } from '@fortawesome/free-solid-svg-icons'; // solid icons
import { faGithub } from '@fortawesome/free-brands-svg-icons'; // free brands icons

import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // disable CSS injection in app (next.js doesn't allow that)

// create icons library
library.add(faGithub, faDownload, faCaretDown, faIdCardClip, faCode, faRankingStar, faCommentDots, faMoon, faSun, faEnvelope, faArrowUpRightFromSquare, faClipboardUser, faClipboardQuestion, faClipboardCheck, faClipboardList, faFaceSmile, faShieldHalved, faScaleBalanced, faPen, faServer, faDatabase, faCookie, faCopyright, faUserShield);