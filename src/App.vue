<template>
    <MainHeader />
    <main class="bg-white font-serif p-10">
        <div class="container max-w-screen-lg mx-auto">

            <InfoContainer
                heading="Wedding itinery"
            >
                <template #intro>
                    <p>We want to make the most of the venue and our quality time with you - but don't worry, you don't need to spend the full weekend with us! There are lots of things to do at and near the venue, and you are welcome to come and go as you wish.</p>

                    <p>You've already told us which meals you'll be around for, and we're catering accordingly. If you can't remember what you told us, please just ask and we can remind you! You'll be shocked to hear that there is indeed a spreadsheet...</p>
                </template>

                <InfoBlock
                    heading="Friday"
                >
                    <TimeList
                        :timeline="fridayTimes"
                    />
                    <p>You can BYOB if you like, but there is no fridge space so you may want to bring a coolbox (or red wine? Or warm white wine? Jamie doesn't like wine.)</p>
                </InfoBlock>

                <InfoBlock
                    heading="Saturday: the main celebration"
                >
                    <TimeList
                        :timeline="saturdayTimes"
                    />

                    <p>NB <strong>Saturday is not BYOB.</strong> We will be providing soft drinks and some wine, and there will be a paid bar.</p>
                </InfoBlock>

                <InfoBlock
                    heading="Sunday"
                >
                    <p>Time for you to do whatever you fancy in Wilde Lodge's 15 acres of gardens and grounds, or to venture further afield. You can chill out with a book, go walking on Offas Dyke footpath or wild swimming in the River Teme, or visit nearby Knighton or Ludlow.</p>

                    <p>We'll most likely be chilling at Wilde Lodge catching up with anyone still around. Jamie's bringing a football, Sarah's looking forward to a nap.</p>

                    <TimeList
                        :timeline="sundayTimes"
                    />

                    <p>You can BYOB if you like, but we likely won't be drinking all that much.</p>
                </InfoBlock>

                <InfoBlock
                    heading="Monday"
                >
                    <TimeList
                        :timeline="mondayTimes"
                    />
                </InfoBlock>
            </InfoContainer>

            <InfoContainer
                heading="All the info we can think of"
            >
                <InfoBlock
                    heading="Dress code on the wedding day"
                >
                    <p><strong>Semi-formal/dressy casual.</strong></p>
                    <p>We hadn't heard of this either. Google it and that's what we've got in mind.</p>
                    <p>We want everyone to feel comfortable but also a bit dressed up.</p>
                    <p>Jamie will be wearing a dark green suit with sneakers and may or may not wear a tie...</p>
                    <p>Sarah will be the one in a wedding dress.</p>
                    <p>The venue is based on a farm, with mainly gravel and grass and some uneven surfaces. We hope to spend some of the wedding outside, so you may want to take that into consideration when choosing an outfit and footwear.</p>
                </InfoBlock>
                <InfoBlock
                    heading="Dress code on the other days"
                >
                    <p>For the rest of the weekend, wear what you want. Just something, please.</p>
                    <p>There is a river for wild swimming so feel free to bring your bathers and towels.</p>
                    <p>Obviously we're in Britain, so assume rain will make an appearance at some point.</p>
                </InfoBlock>
                <InfoBlock
                    heading="Info for campers"
                >
                    <p>There will be a getting ready area opened up near the tent village on Saturday morning. We're told there are mirrors and plug sockets aplenty.</p>
                    <p>The showers have shower gel in them and we'll provide some emergency toiletries. Bring your usual toiletries and towels. Maybe a backup towel if you plan to swim in the river.</p>
                </InfoBlock>
                <InfoBlock
                    heading="There's plenty of parking"
                >
                    <p>There's a nice long drive through the fields in front of the venue, and they park the cars along the left of it. Just rock up and you'll be guided in.</p>
                </InfoBlock>
                <InfoBlock
                    heading="Book taxis in advance"
                >
                    <p>We're told that taxis locally need advance booking, so please <strong>book early</strong> to avoid disappointment.</p>
                    <p>
                        Wolfe Taxi's - Onibury - 01584 856690 M: 07812 207615 / 07864 824406<br>
                        Radnor and Kington Taxi - 01547 560205<br>
                        Knighton Taxi - 01547 528165<br>
                        Arms Cars - Craven Arms - 01588 672 734<br>
                        R.P Richards - Craven Arms - 01588 672075<br>
                        Ludlow Taxi - Ludlow - 01584 876666<br>
                        Annett's Taxi - Ludlow - 01584 878787
                    </p>
                </InfoBlock>
                <InfoBlock
                    heading="Finding the venue"
                >
                    <p>The venue address is Wilde Lodge, Lower Stanage Farm, Knighton, LD7 1LU.</p>
                    <p>Wilde Lodge is usually easy to find via Google Maps, or you can use What3Words: <a href="https://w3w.co/resolved.mills.flexibly" target="_blank">resolved.mills.flexibly</a>.</p>
                </InfoBlock>
                <InfoBlock
                    heading="Photos & social media"
                >
                    <p>You're very welcome to take photos of the celebrations during our wedding weekend, but we'd be grateful if you'd hold off sharing them via social media until a few days afterwards.</p>
                </InfoBlock>
                <InfoBlock
                    heading="Gift policy"
                >
                    <p>We do not expect or ask anything from you; we'll be thrilled to spend time with you on our wedding weekend. If you insist on giving something, we would be so happy if you'd make a small donation to <a href="https://www.annasrescue.org" target="_blank">Anna's Rescue Centre</a> or <a href="https://amiciidogrescue.org.uk/" target="_blank">Amicii Dog Rescue</a>. These feature heavily in the origin stories of Skippy and Panda.</p>
                </InfoBlock>
                <InfoBlock
                    heading="Contact us"
                >
                    <p>If in doubt, drop us a line:</p>
                    <p>
                        Jamie - 07872 572288<br>
                        Sarah - 07851 496887
                    </p>
                </InfoBlock>
            </InfoContainer>

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
import MainHeader from '@/components/MainHeader.vue';
import InfoContainer from '@/components/InfoContainer.vue';
import InfoBlock from '@/components/InfoBlock.vue';
import TimeList from '@/components/TimeList.vue';

import {
    fridayTimes,
    saturdayTimes,
    sundayTimes,
    mondayTimes
} from '@/data/timings.js'

</script>
