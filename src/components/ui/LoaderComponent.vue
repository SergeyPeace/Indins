<template>
    <div class="loader__container">
        <span class="loader"></span>
    </div>
    
</template>
<script>
</script>
<style>
.loader__container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    width: 100vw;
}
.loader {
    width: 148px;
    height: 148px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
    }

    @keyframes rotation {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
} 
</style>