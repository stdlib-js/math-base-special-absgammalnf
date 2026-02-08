"use strict";var s=function(e,o){return function(){return o||e((o={exports:{}}).exports,o),o.exports}};var C=s(function(Hr,A){
var I=require('@stdlib/number-float64-base-to-float32/dist');function J(e){return e===0?.07721566408872604:I(.07721566408872604+I(e*I(.06734848022460938+I(e*.006982756312936544))))}A.exports=J
});var h=s(function(hr,H){
var E=require('@stdlib/number-float64-base-to-float32/dist');function K(e){return e===0?.3224671185016632:E(.3224671185016632+E(e*E(.020639566704630852+E(e*.004117684438824654))))}H.exports=K
});var S=s(function(Pr,P){
var O=require('@stdlib/number-float64-base-to-float32/dist');function Q(e){return e===0?.679650068283081:O(.679650068283081+O(e*O(.11605872958898544+O(e*.003756736870855093))))}P.exports=Q
});var V=s(function(Sr,U){
var n=require('@stdlib/number-float64-base-to-float32/dist');function _(e){return e===0?-.07721566408872604:n(-.07721566408872604+n(e*n(.26998740434646606+n(e*n(.14285100996494293+n(e*.011938951909542084))))))}U.exports=_
});var d=s(function(Ur,Y){
var l=require('@stdlib/number-float64-base-to-float32/dist');function $(e){return e===0?.48383641242980957:l(.48383641242980957+l(e*l(-.14758621156215668+l(e*l(.06460130959749222+l(e*l(-.03284503519535065+l(e*l(.01864837482571602+l(e*-.009892062284052372))))))))))}Y.exports=$
});var z=s(function(Vr,j){
var b=require('@stdlib/number-float64-base-to-float32/dist');function x(e){return e===0?-.07721566408872604:b(-.07721566408872604+b(e*b(.7367897033691406+b(e*.4956490397453308))))}j.exports=x
});var L=s(function(Yr,G){
var N=require('@stdlib/number-float64-base-to-float32/dist');function rr(e){return e===0?1.1095842123031616:N(1.1095842123031616+N(e*N(.21059811115264893+N(e*-.01029954943805933))))}G.exports=rr
});var Z=s(function(dr,X){
var M=require('@stdlib/number-float64-base-to-float32/dist');function er(e){return e===0?.08333324640989304:M(.08333324640989304+M(e*-.0027612908743321896))}X.exports=er
});var D=s(function(jr,B){
var ar=require('@stdlib/math-base-assert-is-nanf/dist'),tr=require('@stdlib/math-base-assert-is-infinitef/dist'),ir=require('@stdlib/math-base-special-absf/dist'),c=require('@stdlib/math-base-special-lnf/dist'),vr=require('@stdlib/math-base-special-truncf/dist'),ur=require('@stdlib/math-base-special-sinpif/dist'),r=require('@stdlib/number-float64-base-to-float32/dist'),lr=require('@stdlib/constants-float32-pi/dist'),g=require('@stdlib/constants-float32-pinf/dist'),or=C(),sr=h(),fr=S(),nr=V(),cr=d(),pr=z(),qr=L(),Tr=Z(),T=r(0),W=r(.5),v=r(1),R=r(2),yr=r(3),Fr=r(4),Ir=r(5),Er=r(6),Or=r(8),br=r(-29406446e-18),Nr=r(-235939837e-16),Wr=r(.418938547),Rr=r(8388608),gr=r(134217728),kr=r(7450580596923828e-24),p=r(1.46163213),mr=r(-.121486291);function wr(e){var o,k,u,y,F,f,m,q,w,a,t,i;if(e=r(e),ar(e)||tr(e))return e;if(e===T)return g;if(e<T?(o=!0,e=r(-e)):o=!1,e<kr)return-c(e);if(o){if(e>=Rr||(q=ur(e),q===T))return g;k=c(r(lr/ir(r(q*e))))}if(e===v||e===R)return T;if(e<R)switch(e<=r(.9)?(i=-c(e),e>=r(r(p-v)+r(.27))?(a=r(v-e),u=0):e>=r(r(p-v)-r(.23))?(a=r(e-r(p-v)),u=1):(a=e,u=2)):(i=T,e>=r(p+r(.27))?(a=r(R-e),u=0):e>=r(p-r(.23))?(a=r(e-p),u=1):(a=r(e-v),u=2)),u){case 0:t=r(a*a),F=or(t),y=r(t*sr(t)),f=r(r(a*F)+y),i=r(i+r(f-r(W*a)));break;case 1:t=r(a*a),f=r(r(br+r(a*Nr))+r(t*cr(a))),i=r(i+r(mr+f));break;case 2:F=r(a*pr(a)),y=r(v+r(a*qr(a))),i=r(i+r(r(F/y)-r(W*a)));break}else if(e<Or)switch(u=vr(e),a=r(e-u),f=r(a*nr(a)),m=r(v+r(a*fr(a))),i=r(r(W*a)+r(f/m)),t=v,u){case 7:t=r(t*r(a+Er));case 6:t=r(t*r(a+Ir));case 5:t=r(t*r(a+Fr));case 4:t=r(t*r(a+yr));case 3:t=r(t*r(a+R)),i=r(i+c(t))}else e<gr?(q=c(e),t=r(v/e),a=r(t*t),w=r(Wr+r(t*Tr(a))),i=r(r(r(e-W)*r(q-v))+w)):i=r(e*r(c(e)-v));return o&&(i=r(k-i)),i}B.exports=wr
});var Ar=D();module.exports=Ar;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
