<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import { recentYear, awards, awardCategories, updateAwards } from "$lib/awards";

    let screenX = $state(1450);
    let scrollY = $state(0);

    let active = $state(false);

    onMount(() => {
        setTimeout(() => {
            active = true;
        }, 100);
    })

    let i = $state(0);
    let currAwards = $state([]);

    let contributors = $state([
        ["Ellie Ahmed", "A senior who enjoys composing music and coding."],
        ["Lily Ahmed", "A sophomore who loves painting and writing."],
        ["Alicia Almonte", "A freshman with passion for trying and learning new things. She also loves spending time with friends and family."],
        ["Samantha Anisman", "A senior who loves painting. She will be attending the Chicago Institute of the Arts and enjoys cold drinks."],
        ["Michael Aptacy", "A junior who likes hanging out with his friends."],
        ["Michayla Benuscak", "A senior who enjoys art and spending time with friends."],
        ["Maya Chrzanowski", "A freshman who loves animals and music. In her spare time, she figure skates and plays piano."],
        ["Meena Chrzanowski", "A senior who enjoys painting, particularly watercolor, and dancing. She also has a passion for veterinary medicine."],
        ["Meera Chrzanowski", "A senior who will be attending Tufts University in the fall. She hopes to minor in fine arts and continue working with oils."],
        ["Madeline Cohen", "A junior who loves cooking, baking, her friends, her dogs, and her sister. She is also on the varsity softball team. GO LADYBEARS!!!"],
        ["Danny Dempsey", "A freshman finishing up his year at BHS, and at any given moment, you can probably see him watching NASCAR or car videos. He also loves volleyball, art, and photography, and is excited to pursue more of these interests in future years."],
        ["Miranda Dempsey", "A high school freshman who loves theater, cross country, and painting. She enjoys writing as a hobby in her free time."],
        ["Caidon Dillon", "A senior working with art through ceramics and enjoys playing video games."],
        ["Jade Fuller", "A freshman who loves to dance."],
        ["Luke Fuller", "A senior who enjoys robotics and photography."],
        ["Harrison Gluck", "A senior who partakes in Briarcliff ’s ceramics classes as well as playing on the high school’s basketball team."],
        ["Jacob Janowitz", "A freshman following his love for art both in and outside of school. Aside from film classes within the high school, Jacob pursues his talent through music production and film critique."],
        ["Marc Katz", "A freshman with a talent for both films and sports, having worked in film through Briarcliff High School’s film department and participating in both competitive swimming and track."],
        ["Georgia Kluger", "A junior who is a big Billie Eilish fan."],
        ["Robert Leggio", "A sophomore who likes to play football, basketball, and golf in his free time. But his favorite thing to do when he is not focusing on his studies is enjoying quality time with family and friends."],
        ["Julia Maad", "A sophomore who loves editing and Jenna Ortega."],
        ["Elia Martins", "A sophomore who loves spending time with her friends."],
        ["Oliver McGrath", "A sophomore with experience in art, particularly photography. Outside of classes, Oliver also plays lacrosse."],
        ["Avery McLear", "A senior who enjoys hanging out and being creative."],
        ["Jordan Melnick", "A seventeen-year-old junior at BHS who possesses a deep passion for both dance and painting, and values spending quality time with friends and family."],
        ["Kevin Miller", "A freshman and artist, expressing his talent through print alongside other mediums."],
        ["Andrew Milowitz", "A sophomore who enjoys making movies and acting in dramas and musicals. When he is not in school or on stage, he spends his time on the race track racing go karts professionally all around the state."],
        ["Nika Moini", "A sophomore who is passionate about songwriting, and plays the guitar, piano, flute, and sings."],
        ["Hannah Nirenberg", "A freshman who has a passion for doing art. She loves all types of art, but her favorite mediums include colored pencils and charcoal."],
        ["Nina Nowakiwskyj", "A senior who enjoys track and is known to engage in gluttony (from time to time)."],
        ["Emely Olivo", "A senior with a creative mindset with hopes to fulfill her aspirations of art."],
        ["Celeste Rodriguez", "A sophomore who likes Tiktok."],
        ["Phoebe Rubin", "A senior who would describe herself as an artist, music connoisseur, and Fantastic Mr. Fox nerd. She is so excited to be participating in NAHS this year and being taught by the lovely, wise, Ms. Smith."],
        ["Matt Seim", "A senior who is passionate about hockey, art, and other activities."],
        ["Gred Skendo", "A freshman who loves drawing, painting, and math. During their free time, they enjoy video games and cycling."],
        ["Conall Torres", "A junior who never likes to take things too seriously. When he’s not reading, joking with his friends and teachers, or playing sports, he’s probably bored—and wishing he were."],
        ["Sydney Weiss", "A sophomore who enjoys playing sports and being with her dog. When she is not with her friends, she is spending time with her family."],
        ["Kaylin Wong", "A sophomore that enjoys working with ceramics and sports. She participates in both cheer and lacrosse."],
        ["Fiona Xu", "A junior who loves art and spending time with her cat, Pepper."],
        ["Arianna Zamora", "A sophomore with a liking for writing poetry and going on walks on a trail."]
    ]);

    let videos = $state([
        [
            "Mission Unfailable",
            "Jacob Janowitz, Marc Katz, Oliver McGrath, and Andrew Milowitz",
            "https://vimeo.com/1084618407/7dc0f651ba?share=copy"
        ],
        [
            "Green New Deals",
            "Zoe Amsterdam",
            "https://vimeo.com/1084317273/af0520b7dc?share=copy"
        ],
        [
            "Lost In Sound",
            "Ellie Ahmed",
            "https://vimeo.com/1084329795/fa79b81df0?share=copy"
        ]
    ])
</script>
<svelte:head>
    <link rel="preload" as="image" href="{base}/images/2026/cover.png" />
</svelte:head>
<style>
    #cover {
        width: 1500px;
        position: fixed;
        top: 0;
        right: 0;
        user-select: none;
        -webkit-user-drag: none;
        z-index: 0;
    }
    @media (min-width: 1500px) {
        #cover {
            width: 100%;
        }
    }
    #coverText {
        z-index: 1;
        position: relative;
        color: white;
        text-shadow: 0px 0px 10px black;
        div {
            margin-bottom: 0px;
            margin-top: 0px;
        }
    }
    #content {
        z-index: 999;
        position: relative;
    }
    #body {
        background-color: rgb(114, 75, 51);
        margin: none;
        padding: 20px;
        color: white;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
    }

    #studentStaff {
        color: white;
        border: none;
        box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.205);
    }


    #aboutVolume {
        top: 900px;
        transition: all ease 2s;
        border: none;
        box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.205);
    }

    #submission {
        background-color: rgb(59, 51, 45);
        padding: 30px;
        color: white;

        div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

            div {
                padding: 10px;
                margin: 5px;
                background-color: rgb(107, 87, 78);
            }
            div:hover {
                background-color: rgb(125, 100, 90)
            }

        }

        img {
            max-width: 300px;
            display: block;
            margin: 0 auto;
        }
    }

    #media {
        background-color: rgb(105, 82, 66);
        color: white;
        padding: 20px;

        #media-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-gap: 10px;

            div {
                background-color: rgb(142, 103, 76);
                padding: 10px;
                button {
                    margin-bottom: 10px;
                    width: 100%;
                    background-color: rgb(94, 50, 50);
                    box-shadow: none;
                }
                button:hover {
                    transform: scale(1.01)
                }
                button:active {
                    transform: scale(1.03);
                }
            }
            div:hover {
                background-color: rgb(138, 107, 97) ;
            }
        }
    }

    #face {
        position: fixed;
        z-index: 2;
        transform: translate(-50%, 0%);
        left: 50%;
        max-height: 400px;
    }
</style>
<svelte:window bind:innerWidth={screenX} bind:scrollY={scrollY}></svelte:window>
<img id="cover" style="top: {-scrollY/20}px;" src="{base}/images/2025/background.png" alt="Black background with paint streaks" />
<img id="face" style="top: {300-(scrollY*1.05)}px;" src="{base}/images/2025/coolFace.png" alt="Face" />
<div id="background"></div>
<div id="coverText">
    <p style="top: {10-(scrollY/20)}px; left: 15px; position: fixed; font-family: Epilogue, Montserrat; margin-right: 150px; text-align: left;"><i>Girl Behind a Mask - </i> <span style:font-weight=600>Maya Chrzanowski, Jade Fuller, and Lucy Sternfeld</span></p>
    <div style="top: 100px; position: fixed; transform: translate(-50%, 0%); left: 50%;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIII</p>
        <p>Scroll Down to Read <span style:transform="translateY(5px);" class="material-symbols-outlined" translate="no">arrow_circle_down</span></p>
    </div>

</div>
<div style:height=550px></div>
<div id="content">
    <div style:height=60px></div>
    <div id="body">
            <div id="studentStaff" style="background-color: rgba(200, 160, 80, 0.85); width: 90%; justify-self: center; padding: 20px; border-radius: 30px; text-shadow: 0px 0px 10px black; font-weight: 600; margin-bottom: 50px;">
                <h2>Student Staff</h2>
                <p>Editor-in-Chief: Abigail Chung</p>
                <p>Art Director: Serena Xu</p>
                <p>Copy Editor: Madeline Chu</p>
                <p>Photography Editor: Ava Wu</p>
            </div>
        <div>
            <h2>The plight of teenage life is hardly undocumented.</h2>
            <p style:padding-top=20px style:padding-bottom=30px>
                Welcome to the 2025 edition of Briars & Ivy, this year’s ever-elusive pursuit of artistic perfection.
                Among weeks of AP exams, finals, and preparations for end-of-year celebrations, this book has slowly
                been gaining the strength to lift off the runway and land before you. Thankfully, our laptops and brain
                cells didn’t crash and burn during the process. Not too hard, at least.
                <br><br>
                As we approach our last days of high school, only to turn and start afresh in college, the
                questions begin. What exactly is perfection? How do we recognize “enough”? Emerging from
                childhood and into the big, wide, adult world, everything feels foreign and daunting. When life seems
                so turbulent, we often find ourselves retracing our steps. The threshold between maturity and youth is
                messy and obscure. It’s when we tow this line that we search for answers–often through expression.
                and inspiration to flourish.<br><br>
                Any younger sibling could tell you that
                early on, being a “teen” denotes groans, complaints, and seemingly endless eye-rolls. Yet, Vol. LXIII
                delves deeper. Having just turned 18 (and grown a wisdom tooth!) we can personally disclose that
                adolescence is, above all else, confusing. Figuring yourself out isn’t so easy when you don’t look, act, or
                even feel like the person you’ve always been. It’s only natural to fear a reality where everything seems
                wrong, to covet a fantasy in which the right choice exists and you know how to make it.
                <br><br>
                Briars & Ivy hopes that the following pages will inspire you to look a little closer at life’s
                confusions–and perhaps, find some clarity along the way.
                <br><br>
                <span style:font-size=45px style:font-family="Indie Flower">Abigail Chung, Serena Xu</span><br>
                <span style:font-family="Epilogue"><i>Editor-in-Chief and Art Director</i></span><br>
                ____
            </p>
            <div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;border-radius:40px;" src="https://online.fliphtml5.com/l879/inho/" title="2025 Briars&Ivy Website Version" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
        </div>
    </div>
    <div id="media">
        <h2>Audiovisual Media</h2>
        <p>Access QR Code content from this volume on the site</p>
        <div id="media-grid">
        {#each videos as x}
            <div><h4 style:font-family="Epilogue"><i>{x[0]}</i> - <span style:font-weight=600>{x[1]}</span></h4>
            <button onclick={() => {window.location.href = x[2]}}><span class="material-symbols-outlined" translate="no">play_circle</span></button></div>
        {/each}
        </div>
    </div>
    <div id="submission">
        <h2>Student Contributors</h2>
        <img src="{base}/images/2025/bunnyguy.png" alt="Sculpture of a bunny" />
        <p style:font-family="Epilogue"><i>Knuffle -</i> <span style:font-weight=600>Kaylin Wong</span></p>
        <p>Briars and Ivy is an award-winning, student-run publication, dependent on our staff members and the overall Briarcliff High School Community to showcase the artistic and literary culture of our generation. This year, we thank the following {contributors.length} individuals for their contributions to Volume LXIII in 2025.</p>
        <div>
            {#each contributors as x}
            <div>
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
            </div>
            {/each}
        </div>
        <!--<img src="{base}/images/global/coolGuy.png" alt="Oil illustration of an abstract person" />
        <p style:font-family="Epilogue"><i>Introflection -</i> <span style:font-weight=600>Jordan Melnick</span></p>-->
    </div>
</div>
<button id="return" onclick={() => {window.location.href = base + "/"}}><span translate="no" class="material-symbols-outlined">arrow_circle_left</span></button>