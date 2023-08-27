<template>
    <MainHeader />
    <main class="font-serif p-10">
        <div class="container max-w-screen-lg mx-auto">

            <CopyBlock>

                <ElemH1>
                    Weekend itinerary
                    <span class="text-wlgreenlight font-sans text-xl font-normal mb-5">(probably)</span>
                </ElemH1>

                <p>We want to make the most of the venue and our quality time with you - but don't worry, you don't need to spend the full weekend with us! If you can make the Saturday only, that's completely fine. If you can stick around for the weekend, feel free to come and go as you wish. There are lots of things to do at the venue, and we want you to enjoy your time as much as we do.</p>

                <ElemH2>Friday</ElemH2>
                <p>We'll be having a bite to eat in the evening - please let us know if you'll be joining us. You can BYOB if you like. If you're staying on-site, feel free to arrive from 4pm.</p>

                <ElemH2>Saturday: the main celebration</ElemH2>

                <p>We're still pinning down the specifics, but broad strokes:</p>

                <ul class="not-prose">
                    <li>Breakfast for on-site guests</li>
                    <li>Getting ready &amp; all that jazz <span class="font-sans">(jazz not guaranteed)</span></li>
                    <li>Guests arrive for drinks &amp; nibbles</li>
                    <li>Ceremony</li>
                    <li>Feast &amp; speeches</li>
                    <li>Boogieing</li>
                    <li>More food</li>
                    <li>Nightcaps</li>
                </ul>

                <p class="font-sans text-2xl">NB Saturday is not BYOB. We will be providing soft drinks and some wine, and there will be a paid bar.</p>

                <ElemH2>Sunday</ElemH2>
                <p>Time for you to do whatever you fancy in Wilde Lodge's 15 acres of gardens and grounds, or to venture further afield. You can chill out with a book, go walking on Offas Dyke footpath or wild swimming in the River Teme, or visit nearby Knighton or Ludlow. We'll be keeping you well-fed throughout, so do let us know if you'll be around. You can BYOB if you like.</p>

                <ElemH2>Monday</ElemH2>
                <p>Check out by 10am</p>

            </CopyBlock>


            <!-- Questions -->
            <div class="prose prose-strong:text-wlgreen mx-auto mb-10 text-wlgreen text-lg">
                <ElemH1>
                    Got questions?
                </ElemH1>
                <dl>
                    <FaqSingle
                        question="I demand to speak to your supervisor!"
                    >
                        Fair enough.<br>
                        Jamie: 07872 572288<br>
                        Sarah: 07851 496887
                    </FaqSingle>
                    <FaqSingle
                        question="What's the dress code?"
                    >
                        Semi-formal/dressy casual. We want everyone to feel comfortable but also a bit dressed up.<br><br>
                        The venue is based on a farm, with mainly gravel and grass and some uneven surfaces. We hope to spend some of the wedding outside, so you may want to take that into consideration when choosing an outfit and footwear.
                    </FaqSingle>
                    <FaqSingle
                        question="What's this about tents?"
                    >
                        You still haven't sorted your bell tent?! Gasp, I say!<br><br>
                        Bookings are open until 15th August and we've reserved a block of tents. However, the tents are first come first served so it's best not to leave it too late. <a href="#tents">All the details are below</a>.
                    </FaqSingle>
                    <FaqSingle
                        question="Is there parking?"
                    >
                        Yes! There's a nice long drive through the fields in front of the venue, and they park the cars along the left of it. Just rock up and you'll be guided in. Sooner you get here, the less you'll have to walk.
                    </FaqSingle>
                    <FaqSingle
                        question="What about taxis?"
                    >
                        We're told that taxis locally need advance booking and there aren't usually enough taxis for people in the countryside! Book early to avoid disappointment. You'll find numbers at <a href="https://www.wildelodge.com/directions" target="_blank">the bottom of this page</a>.
                    </FaqSingle>
                    <FaqSingle
                        question="Are kids invited?"
                    >
                        Hopefully you already know the answer to this as we need final RSVP! Give us a ring if you've got questions.
                    </FaqSingle>
                    <FaqSingle
                        question="You want gifts?"
                    >
                        We do not expect or ask anything from you; we'll be thrilled to spend time with you on our wedding weekend. If you insist on giving something, we would be so happy if you'd make a small donation to <a href="https://www.annasrescue.org" target="_blank">Anna's Rescue Centre</a> or <a href="https://amiciidogrescue.org.uk/" target="_blank">Amicii Dog Rescue</a>. These feature heavily in the origin stories of Skippy and Panda.
                    </FaqSingle>
                </dl>
            </div>

            <!-- Our faces -->
            <CopyBlock>
                <ElemH1>
                    See you there!
                </ElemH1>
                <img src="/img/j-s-custard.jpg" class="mt-0" />
            </CopyBlock>

        </div>
    </main>
</template>

<script setup>
import CopyBlock from '@/components/CopyBlock.vue'
import ElemH1 from '@/components/ElemH1.vue'
import ElemH2 from '@/components/ElemH2.vue'
import MainHeader from '@/components/MainHeader.vue';
import FaqSingle from '@/components/FaqSingle.vue';
</script>
