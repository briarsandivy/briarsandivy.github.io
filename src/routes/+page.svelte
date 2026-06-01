<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    import { recentYear, awards, awardCategories, updateAwards, catalog } from "$lib/awards";

    let screenX = $state(1450);
    let scrollY = $state(0);

    let active = $state(false);

    onMount(() => {
        setTimeout(() => {
            active = true;
        }, 100);
    })

    let i = $state(0);
    let currAwards = $derived(updateAwards(i));
</script>
<svelte:head>
    <link rel="preload" as="image" href="{base}/images/2026/cover.png" />
</svelte:head>
<style>
    #cover {
        width: 1500px;
        position: fixed;
        right: 0;
        user-select: none;
        -webkit-user-drag: none;
        z-index: 1;
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
        button {
            color: white;
            text-shadow: 0px 0px 5px black;
            background-color: rgba(184, 184, 184, 0.637);
            border: rgb(240, 239, 239) 5px solid;
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

    #voice {
        width: 700px;
        transition: all 0.3s ease-in-out;
        @media (max-width: 750px) {
            width: 300px;
        }
    }

    #aboutVolume {
        top: 900px;
        transition: top ease 2s, border 4s;
        border: rgb(96, 86, 30) solid 0px;
        box-shadow: 0px 5px 20px 10px rgba(0, 0, 0, 0.205);
    }
    #aboutVolume.active {
        top: 170px;
        border: rgb(96, 86, 30) solid 8px;
    }

    #submission {
        background-color: rgb(120, 120, 58);
        padding: 30px;
        color: white;

        button {
            box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
            text-align: center;
            margin-top: 10px;
            background-color:  rgb(149, 149, 20);
            color: white;
            border: none;
        }
        button:active {
            background-color:  white;
            color: rgb(149, 149, 20);
        }

        img {
            max-height: 250px;
            position: relative;
            display: block;
            margin: 0 auto;
            padding-top: 10px;
        }
    }


    #awards {
        margin-top: 40px;
        margin-bottom: 40px;

        #gridAwards {
            margin: 0 auto;
            display: grid;
            /* Create two columns: one for the image (auto-sized) and one for text */
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 1.5rem;
            align-items: center; /* Vertically centers text with the image */
            max-width: 90%;
        }

        button {
            padding: 5px;
            margin: 5px;
            margin-left: 20px;
            margin-right: 20px;
            transform: translateY(2px);
            transition: visibility 0.1s ease;
            box-shadow: none;
            span {
                transform: translateY(1.5px);
            }
        }
        button:hover {
            cursor: pointer;
            transform: scale(1.05) translateY(2px);
        }
        button:active {
            transform: scale(1.2) translateY(2px);
        }

        button.goAway {
            visibility: hidden;
        }

        h2, h3 {
            grid-column: 1 / -1; 
            text-align: center;
        }
        h2 {
            margin-bottom: 0px;
        }
        h3 {
            margin: 5px;
        }

        img {
            width: 300px; /* Adjust based on your preference */
            height: auto;
            display: block;
            margin: 0 auto;
        }

        p {
            margin: 0;
            font-size: 1.1rem;
            line-height: 1.4;
            font-family: Epilogue, Montserrat;
        }

        @media (max-width: 800px) {
            grid-template-columns: repeat(auto-fit, minmax(150px, 500px));
            text-align: center;
            img {
                width: 200px;
            }
        }
    }

</style>
<svelte:window bind:innerWidth={screenX} bind:scrollY={scrollY}></svelte:window>

<img id="cover" style="top: {-scrollY/20}px;" src="{base}/images/2026/cover.png" alt="Figure standing in a field of sunflowers" />
<div id="coverText">
    <p style="top: {10-(scrollY/20)}px; left: 15px; position: fixed; font-family: Epilogue, Montserrat"><i>Sunflowers - </i> <span style:font-weight=600>Alexandra Orr</span></p>
    {#if screenX >= 1500}
    <div style="top: {300-(scrollY/10)}px; right:200px; position: fixed;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIV</p>
        <p><button onclick={() => {window.location.href = base + "/read/2026"}}>Read Volume</button></p>
    </div>
    {:else if screenX > 800}
    <div style="top: {300-(scrollY/10)}px; right:150px; position: fixed;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIV</p>
        <p><button onclick={() => {window.location.href = base + "/read/2026"}}>Read Volume</button></p>
    </div>
    {:else}
    <div style="top: {290-(scrollY/10)}px; position: fixed; transform: translate(-50%, 0%); left: 50%;">
        <h1>Briars and Ivy</h1>
        <p style:font-weight=700 style:font-size=20px>VOL. LXIV</p>
        <p><button onclick={() => {window.location.href = base + "/read/2026"}}>Read Volume</button></p>
    </div>
    {/if}
    {#if screenX >= 1000}
    <div id="aboutVolume" transition:fade class:active={active} style="position: fixed; left: 50px; background-color: rgba(200, 160, 80, 0.85); width: 40%; padding: 20px; border-radius: 50px; text-shadow: 0px 0px 10px black; font-weight: 600">
        <p>As an emblem of the teenage experience, creativity encourages us to actively nurture a juxtaposition between the internal and the 
        external––our inner imaginations and outer inspirations––that result in a network 
        of refined skills and individuality.<br><br>
        As we pass Volume LXIV of Briars & Ivy to the hands 
        of our readers, we hope that the commemorations within these pages embolden 
        you to view the world introspectively and to remain cognizant of the memoirs that 
        fundamentally nurture the impacts you create.</p>
    </div>
    {/if}
</div>
<div style:height=550px></div>
<div id="content">
    <img src="{base}/images/2026/waveLanding.png" class="wave" alt="Decorational graphic" />
    <div id="body">
        <img src="{base}/images/global/voice.png" id="voice" style="display: block; margin: 0 auto;" alt="Various artistic and literary works from Briars and Ivy volume LXII" />
        <div>
            <p><span style:font-family="Epilogue" style:font-weight=700>Briars and Ivy is Briarcliff Manor High School's award winning student magazine.</span> Our magazine reviews all student submissions and judges them anonymously. Our club members voluntarily dedicate time and effort towards producing this publication. Submissions are accepted from current students from the beginning of the school year to mid-April. After months of reviewing, deliberating, formatting, and editing, we finally publish our magazine around the end of the school year.</p>
            <div id="awards">
                <h2>Awards</h2>
                <h3>
                    <button class:goAway={(awards.length-1)==i} onclick={() => {i++;}}>
                        <span class="material-symbols-outlined" translate="no">arrow_circle_left</span>
                    </button> 
                    <span style="user-select: none">{recentYear - i}</span> 
                    <button class:goAway={i <= 0} onclick={() => {i--;}}>
                        <span class="material-symbols-outlined" translate="no">arrow_circle_right</span>
                    </button>
                </h3>
                {#if catalog.indexOf(recentYear-i) != -1}
                <h4 transition:fade><button style:padding=10px onclick={() => {window.location.href = base + "/read/" + (recentYear-i)}}>Read Volume</button></h4>
                {/if}
                
                <div id="gridAwards">
                    {#each currAwards as x}
                        <div class="award-card">
                            <img src="{base}/images/global/awards/{x[1]}.png" alt="Medal graphic" />
                            <p>{x[0]}</p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div id="submission">
        <h2>Are you a BHS Student?</h2>
        <p>If you are currently enrolled in Briarcliff Manor High School, you can submit your works to be included in our next volume. <span style:font-weight=800>Briars and Ivy exists to highlight the myriad of talents and plethora of creative works created by BHS students of all kinds.</span></p>
        <p>Works featured in Briars and Ivy cannot be published anonymously. Briars & Ivy reserves the right to edit pieces; in the case of drastic cuts/edits we will contact the author. We submit each submission to an anti-plagiarism site. The staff will title all untitled submissions.</p>
        <p>Briars and Ivy has published written works, art and sculpture (through photos of the work), music and composition, photography, and screenplays. Email us if you have any qualms about submitting your work.</p>
        <p><button onclick={() => {window.location.href = "mailto:briarsandivy@gmail.com?subject=Briars and Ivy Submission&body=Hi! This is my submission for Briars and Ivy!%0A%0ATitle:%0ADescription:%0APreferred Name (name that I want to use as an attribution to my work, if selected):%0A%0AMy work has been attached to this email in mp4, PDF, JPG, or another acceptable format.%0A%0A Thank you,"}}>Email us your submission</button></p>
        <img src="{base}/images/global/coolGuy.png" alt="Oil illustration of an abstract person" />
        <p style:font-family="Epilogue"><i>Introflection -</i> <span style:font-weight=600>Jordan Melnick</span></p>
    </div>
</div>
