import React             from 'react'
import Div               from '../Basic/Div'
import DocumentHead      from './DocumentHead'
import Footer            from './Footer'
import Header            from './Header'
import Main              from './Main'
import Notifications     from './Notifications'
import StaticHead        from './StaticHead'
import {pageFrameStyle}  from './styles'
import TransitionOverlay from './TransitionOverlay'

const PageFrame = () =>
    <Div theme={pageFrameStyle}>
        <StaticHead/>
        <DocumentHead/>
        <Div id="header-left-margin" theme={pageFrameStyle.hlm}/>
        <Header theme={pageFrameStyle.header}/>
        <Div id="header-right-margin" theme={pageFrameStyle.hrm}/>
        <Div id="left-margin" theme={pageFrameStyle.lm}/>
        <Main theme={pageFrameStyle.main}/>
        <Div id="right-margin" theme={pageFrameStyle.rm}/>
        <Div id="footer-left-margin" theme={pageFrameStyle.flm}/>
        <Footer theme={pageFrameStyle.footer}/>
        <Div id="footer-right-margin" theme={pageFrameStyle.frm}/>
        <TransitionOverlay/>
        <Notifications/>
        <Div id="modal" theme={pageFrameStyle.modal}/>
    </Div>

export default PageFrame
