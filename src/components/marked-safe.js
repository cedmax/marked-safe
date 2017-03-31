import React from 'react'

export default function (props) {
  const {
    event,
    you,
    date,
    eventUrl,
    youUrl
  } = props

  return (
    <div className="_4-u2 mbm _4mrt _5jmm _5pat _5v3q _4-u8" id="tl_unit_7026728389271775827" aria-labelledby="js_6i js_6j js_6k">
      <div className="_3ccb" id="u_jsonp_4_2">
        <div className="userContentWrapper _5pcr" role="article" aria-label="Story">
          <div className="_1dwg _1w_m _2ph_">
            <div>
              <div className="_5x46">
                <div className="clearfix _5va3">
                  <a className="_5pb8 _8o _8s lfloat _ohe" href="#" aria-hidden="true" tabIndex="-1" target="">
                    <div className="_38vo"><img className="_s0 _5xib _5sq7 _44ma _rw img" src={youUrl} alt="" /></div>
                  </a>
                  <div className="clearfix _42ef">
                    <div className="rfloat _ohf" />
                    <div className="_5va4">
                      <div>
                        <div className="_6a _5u5j">
                          <div className="_6a _6b" style={{height: '40px'}} />
                          <div className="_6a _5u5j _6b">
                            <h5 className="_5pbw _5vra" id="js_6j"><span className="fwn fcg"><span className="fcg"><span className="fwb"><a className="profileLink" href="#">{you}</a></span> marked himself safe during <a href="#">{event}</a>.</span></span></h5>
                            <div className="_5pcp _5lel"><span className="_5paw _14zs"><a className="_3e_2 _14zr" href="#" /></span><span><span className="fsm fwn fcg"><a className="_5pcq" href="#" target=""><abbr title="Wednesday, March 22, 2017 at 6:05pm" className="_5ptz"><span className="timestampContent" id="js_6k">{date}</span></abbr></a></span></span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_3x-2">
                <div>
                  <div className="mtm">
                    <div id="u_jsonp_4_5" className="_6m2 _1zpr clearfix _dcs _4_w4 _41u- _5cwb">
                      <div className="clearfix _2r3x">
                        <div className="lfloat _ohe">
                          <span className="_3m6-">
                            <div className="_6ks">
                              <a href="#" tabIndex="-1">
                                <div className="_6l- __c_">
                                  <div className="uiScaledImageContainer _6m5 fbStoryAttachmentImage" style={{height: '158px', width: '158px'}}><img className="scaledImageFitWidth img" src={eventUrl} alt="" width="158" height="158" /></div>
                                </div>
                              </a>
                            </div>
                          </span>
                        </div>
                        <div className="_42ef">
                          <span className="_3c21">
                            <div className="_3ekx _29_4">
                              <div className="_6m3 _--6">
                                <div className="mbs _6m6 _2cnj _5s6c"><a href="#">{event}</a></div>
                                <div className="_6m7 _3bt9">You can check on friends in the affected area or mark yourself safe using Safety Check.</div>
                                <div className="_59tj _2iau">
                                  <div className="clearfix">
                                    <div className="_522u rfloat _ohf" />
                                    <div className="_42ef">
                                      <div className="_5tc6" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="_sa_ _5vsi _192z">
              <div className="_37uu">
                <div>
                  <div>
                    <div className="_3399 _a7s clearfix _zw3">
                      <div className="_524d">
                        <div className="_42nr">
                          <span>
                            <div className="_khz">
                              <a aria-pressed="false" className="UFILikeLink _4x9- _4x9_ _48-k" href="#" role="button" tabIndex="-1">Like</a>
                            </div>
                          </span>
                          <span><span className="_6a"><a className="comment_link _5yxe" role="button" href="#" title="Leave a comment"><em className="_4qba">Comment</em></a></span></span>
                          <span>
                            <div className="uiPopover _6a"><a href="#" className="_p share_action_link _5f9b" title="Send this to friends or post it on your timeline." role="button"><em className="_4qba">Share</em><span className="UFIShareLinkSpinner _1wfk img _55ym _55yn _55yo _5tqs" role="progressbar" aria-valuetext="Loading..." aria-busy="true" aria-valuemin="0" aria-valuemax="100" /></a></div>
                          </span>
                          <span style={{float: 'right'}}><div className="uiPopover _6a"><a href="#" title="Send this to friends or post it on your timeline." role="button" className=" " style={{margin: 0, textDecoration: 'underline', fontWeight: 'initial', color: '#7f7f7f'}}><em className="_4qba">http://safe.dsgn.it</em><span className="UFIShareLinkSpinner _1wfk img _55ym _55yn _55yo _5tqs" role="progressbar" aria-valuetext="Loading..." aria-busy="true" aria-valuemin="0" aria-valuemax="100" /></a></div></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
