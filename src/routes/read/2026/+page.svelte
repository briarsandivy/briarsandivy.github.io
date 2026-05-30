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
        ["Lily Ahmed", "A junior who likes to spend her free time writing and drawing."],
        ["David Almanerez", "A freshman who enjoys drawing."],
        ["Zoe Amsterdam", "A sophomore who loves gene editing and being creative."],
        ["Nina Auld", "A freshman who loves taekwondo training and hanging out with friends."],
        ["Julia Baker", "A senior who loves theatre and tinkering."],
        ["Jem Behr", "A senior who enjoys nature and music."],
        ["Luigi Barrerra", "A senior who enjoys photography and illustrations."],
        ["Michael Cherubini", "A senior who enjoys hanging out with friends."],
        ["Chloe Chu", "A freshman who enjoys composing music, writing poetry, and taking naps."],
        ["Madeline Chu", "A senior who enjoys reading, writing, and sleeping."],
        ["Miranda Dempsey", "A sophomore who loves The Beatles (especially Paul) and reading books."],
        ["Danny Dempsey", "A sophomore who enjoys motorsports, architecture, and theatre."],
        ["Yusuf Durrani", "A sophomore who enjoys basketball and taking photographs."],
        ["Grace Freeman", "A sophomore who enjoys making and listening to music, running, and reading new books."],
        ["Jade Fuller", "A sophomore who enjoys ballet and painting."],
        ["Penn Harris", "A sophomore who enjoys playing the bass and making pottery."],
        ["Eliana Kurtis", "A senior who enjoys baking and music."],
        ["Olivia Lee", "A freshman who uses creative expression to discover new perspectives, usually with a piece of chocolate in hand."],
        ["Julia Mahoney", "A junior who enjoys painting and traveling."],
        ["Samantha Mahoney", "A sophomore who loves soccer."],
        ["Aston Martins", "A senior who likes drawing different types of architecture."],
        ["Jordan Melnick", "A senior who loves art and hanging with friends."],
        ["Alexa Morales", "A junior who loves spending time with friends and listening to Mac DeMarco."],
        ["Joe Mulligan", "A sophomore who loves photography and enjoys basketball."],
        ["Michael Orlin", "A senior who plays the guitar and is an aspiring chemist."],
        ["Alexandra Orr", "A senior who loves drawing and painting."],
        ["Julia Pineda", "A freshman who loves to hangout with friends."],
        ["Mac Prigozen", "A junior who enjoys seeing the world through his own lens."],
        ["Eamon Ragan", "A junior who enjoys reading and swimming."],
        ["Nila Shaines", "A sophomore who expresses herself through writing and drums."],
        ["Lucy Sternfeld", "A sophomore who loves painting and theater."],
        ["Hannah Tashiro", "A junior who enjoys running."],
        ["Harlow Whitney", "A freshman who loves being crafty."],
        ["Robin Willey", "A sophomore who loves art and theatre."],
        ["Olivia Woerner", "A freshman who loves to read, dance, and do anything crafty."],
        ["Ava Wu", "A senior who loves scrapbooking and listening to PinkPantheress."],
        ["Fiona Xu", "A senior who loves playing horror games and doing art."],
        ["Sidney Xu", "A freshman who loves art and listening to music."],
        ["Alissa Zhu", "A senior who enjoys painting and hanging out with her birds."]
    ]);
</script>
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
        background-color: rgb(66, 63, 43);
        margin: none;
        padding: 20px;
        color: white;
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
    #aboutVolume.active {
        top: 120px;
    }

    #submission {
        background-color: rgb(120, 120, 58);
        padding: 30px;
        color: white;

        div {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

            div {
                padding: 10px;
                margin: 5px;
                background-color: rgb(140, 143, 105);
            }
            div:hover {
                background-color: rgb(146, 150, 106);
            }

        }

        img {
            max-width: 300px;
            display: block;
            margin: 0 auto;
        }
    }

    #return {
        position: fixed;
        top: 20px;
        right: 25px;
        z-index: 1000;
        span {
            font-size: 30px;
            transform: translateY(1px)
        }
    }

</style>
<svelte:window bind:innerWidth={screenX} bind:scrollY={scrollY}></svelte:window>

<img id="cover" src="{base}/images/2026/cover.png" alt="Figure standing in a field of sunflowers" />
<div id="coverText">
    <p style="top: {10-(scrollY/50)}px; left: 15px; position: fixed; font-family: Epilogue, Montserrat"><i>Sunflowers - </i> <span style:font-weight=600>Alexandra Orr</span></p>
    {#if screenX >= 1500}
    <div style="top: {300-(scrollY/10)}px; right:200px; position: fixed;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIV</p>
        <p>Scroll Down to Read <span style:transform="translateY(5px)" class="material-symbols-outlined">arrow_circle_down</span></p>
    </div>
    {:else if screenX > 800}
    <div style="top: {300-(scrollY/10)}px; right:150px; position: fixed;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIV</p>
        <p>Scroll Down to Read <span style:transform="translateY(5px)" class="material-symbols-outlined">arrow_circle_down</span></p>
    </div>
    {:else}
    <div style="top: {290-(scrollY/10)}px; justify-self: center; position: fixed;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIV</p>
        <p>Scroll Down to Read <span style:transform="translateY(5px)" class="material-symbols-outlined">arrow_circle_down</span></p>
    </div>
    {/if}
    {#if screenX >= 1000}
    <div id="aboutVolume" transition:fade class:active={active} style="position: fixed; left: 50px; background-color: rgba(200, 160, 80, 0.85); width: 40%; padding: 20px; border-radius: 50px; text-shadow: 0px 0px 10px black; font-weight: 600">
        <h2>Student Staff</h2>
        <p>Editor-in-Chiefs: Ava Wu, Madeline Chu</p>
        <p>Art Director: Kristie Shao</p>
        <p>Copy Editor: Mia Benjamin</p>
        <p>Treasurer: Caroline Pastore</p>
        <p>Secretary: Aanya Shetty</p>
        <p>Assistant Editor: Eamon Reagan</p>
    </div>
    {/if}
</div>
<div style:height=550px></div>
<div id="content">
    <img src="{base}/images/2026/waveLanding.png" class="wave" alt="Decorational graphic" />
    <div id="body">
        {#if screenX < 1000}
            <div id="studentStaff" style="background-color: rgba(200, 160, 80, 0.85); width: 90%; justify-self: center; padding: 20px; border-radius: 50px; text-shadow: 0px 0px 10px black; font-weight: 600">
                <h2>Student Staff</h2>
                <p>Editor-in-Chiefs: Ava Wu, Madeline Chu</p>
                <p>Art Director: Kristie Shao</p>
                <p>Copy Editor: Mia Benjamin</p>
                <p>Treasurer: Caroline Pastore</p>
                <p>Secretary: Aanya Shetty</p>
                <p>Assistant Editor: Eamon Reagan</p>
            </div>
        {/if}
        <div>
            <h2>Welcome, reader</h2>
            <p style:padding-top=20px style:padding-bottom=30px>
                Our past few years at Briarcliff High School have represented a testament
                to the budding authorship and artistic devotion entrusted to us by magazine contributors. 
                We, as editors, have witnessed ourselves mature, progress, and cultivate
                our ambitions alongside fellow students. As we approach the close of our academic
                careers as BHS students, we instinctively try to document our adolescent reminiscences.
                <br><br>
                Volume LXIV of Briars & Ivy exemplifies the diversity of self-expression
                fostered by young creatives; whether through artistry, writing, composition, or
                performance, their art is embodied by an intention to emulate the emotionality
                encapsulated within adolescence. As an emblem of the teenage experience, creativ-
                ity encourages us to actively nurture a juxtaposition between the internal and the
                external––our inner imaginations and outer inspirations––that result in a network
                of refined skills and individuality. Just as we devote ourselves to pursuits of artistic
                and academic ideals, our creations are equally altered by sources of guidance:
                teachers, family, heritage, and childhood, which interminably provide the motivation
                and inspiration to flourish.<br><br>
                As we pass Volume LXIV of Briars & Ivy to the hands
                of our readers, we hope that the commemorations within these pages embolden
                you to view the world introspectively and to remain cognizant of the memoirs that
                fundamentally nurture the impacts you create.
                <br><br>
                <span style:font-size=45px style:font-family="Indie Flower">Ava Wu, Madeline Chu</span><br>
                Editor-in-Chiefs<br>
                ____
            </p>
            <div style="position:relative;padding-top:max(60%,324px);width:100%;height:0;"><iframe style="position:absolute;border:none;width:100%;height:100%;left:0;top:0;border-radius:40px;" src="https://online.fliphtml5.com/l879/BriarsAndIvy2026-Full/" title="BriarsAndIvy2026-Full" seamless="seamless" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true" ></iframe></div>
        </div>
    </div>
    <div id="submission">
        <h2>Student Contributors</h2>
        <img src="{base}/images/2026/coolFace.png" alt="Self-Portrait" />
        <p style:font-family="Epilogue"><i>Self-Portrait -</i> <span style:font-weight=600>Danny Dempsey</span></p>
        <p>Briars and Ivy is an award-winning, student-run publication, dependent on our staff members and the overall Briarcliff High School Community to showcase the artistic and literary culture of our generation. This year, we thank the following {contributors.length} individuals for their contributions to Volume LXIV in 2026.</p>
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

<button id="return" onclick={() => {window.location = base + "/"}}><span class="material-symbols-outlined">arrow_circle_left</span></button>
