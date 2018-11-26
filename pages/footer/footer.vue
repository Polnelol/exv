<template>
    <footer class="footer">
        <div class="footer__cnt cnt">
            <div class="logo footer-logo"></div>
            <div class="footer__subscribe subscribe">
                <div class="subscribe-title">Newsletter</div>
                <div class="subscribe-description">Join our list to receive latest Blockchain, Crypto & Fintech news:</div>
                <form class="subscribe-form">
                    <input class="subscribe-input" type="text" placeholder="Enter your email">
                    <input class="subscribe-btn" type="button" value="Subscribe">
                </form>
            </div>
            <div class="subscribe-social">
                <a class="subscrive-social-item fb-social"></a>
                <a class="subscrive-social-item tw-social"></a>
            </div>
        </div>
    </footer>
</template>

<script>

</script>

<style>
    .footer {
        background-color: #131C22;
        padding: 15px 0 15px 0;
        margin-top: 20px;
    }

    .footer__cnt {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .footer-logo {
        width: 150px;
        height: 50px;
        background: url("/footer-img/footer-logo.png") no-repeat center;
        background-size: cover;
    }

    .subscribe {

    }

    .subscribe-form {
        margin-bottom: 10px;
    }

    .subscribe-title {
        margin-bottom: 5px;
        font-size: 24px;
        color: #fff;
    }

    .subscribe-description {
        color: #fff;
        font-size: 18px;
        margin-bottom: 10px;  
    }

    .subscribe-input {
        width: 250px;
        height: 40px;
        background-color: rgba(255, 255, 255, 1);
        border-radius: 3px; 
        color: #000;
        font-size: 18px;
        padding: 0 10px;
        border: none;
        padding-right: 45px;
        margin-bottom: 5px;
        margin-right: 10px;
    }

    .subscribe-btn {
        cursor: pointer;
        width: 130px;
        height: 40px;
        background: none;
        color: #35CC62;
        text-transform: uppercase;
        border: 2px solid #35CC62;
        border-radius: 3px;
        transition: 0.2s;
        font-size: 18px;
    }

    .subscribe-btn:hover {
        background: #35CC62;
        color: #535353;
    }

    .subscribe-social {
        display: flex;
        justify-content: flex-start;
    }

    .subscrive-social-item {
        cursor: pointer;
        display: block;
        width: 40px;
        height: 40px;
        background-size: cover;
        border-radius: 3px;
        margin-right: 10px;
        transition: 0.2s;
    }

    .fb-social {
        border: 2px solid #4267B2;
        background: url("/social-img/fb-icon-blue.png") no-repeat center;
        background-color: none;
    }

    .fb-social:hover {
        background: url("/social-img/fb-icon-white.png") no-repeat center;
        background-color: #4267B2;
    }

    .tw-social {
        border: 2px solid #41ABE1;
        background: url("/social-img/tw-icon-blue.png") no-repeat center;
    }

    .tw-social:hover {
        border: 2px solid #41ABE1;
        background: url("/social-img/tw-icon-white.png") no-repeat center;
        background-color: #41ABE1;
    }

    @media (max-width: 850px) {
        .footer__cnt {
            display: block;
        }

        .footer-logo {
            margin: 0 auto;
            margin-bottom: 20px;
        }

        .subscribe-input {
            margin-bottom: 10px;
        }

        .subscribe-title {
            font-size: 20px;
        }

        .subscribe-description {
            font-size: 16px;
        }
    }
</style>