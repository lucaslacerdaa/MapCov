<template>
    <div id="container" @click="abrirPerfilComponent()">

            <img src="{{image}}" alt="imagem de perfil">

            <h1 class="nome"> {{nome}} </h1>
            
            <label id="titulo" class="Endereco"> {{endereco}} </label>
            <div id="estado">
                <label id="titulo" class="status"> {{status}} </label>
            </div>
            <label id="subtitle" class="subtitle">Ver mais</label>                               <!-- Elemento fixo -->
            <!-- Tem que estudar como fazer retorno com props -->
            <!-- Essas mensagens são SOMENTE um esboço para ver o comportamente do conteúdo dentro do componente -->
    </div>
</template>
<script src="./script.js"></script>
<style src="./style.css" scoped></style>