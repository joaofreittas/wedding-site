<template>
  <div>
    <b-navbar toggleable="md" class="navbar mr-auto" type="dark">
      <b-navbar-brand tag="h1" class="mb-0" id="title-lg">
        <NuxtLink to="/" class="title" >
          <b>João & Gabi</b>
        </NuxtLink>
      </b-navbar-brand>
      <b-navbar-toggle
        target="nav-collapse"
        id="toggle"
      />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <span class="item-menu">
            <NuxtLink to="/confirmation" class="title">
              <b>Confirmação</b>
            </NuxtLink>
          </span>
          <span class="item-menu">
            <a target="blank" href="https://listas.pontofrio.com.br/joaoegabriele" class="title">
              <b>Lista de Presentes</b>
            </a>
          </span>
          <span class="item-menu">
            <NuxtLink to="/location" class="title">
              <b>Localização</b>
            </NuxtLink>
          </span>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar{
  border:1px solid #B9A389;
  margin:1% auto;
  margin-top: 0;
  background-color:#B9A389;
  padding-left: 20px;
  color: #ffffff;
}
b-nav-item{
  color:#eee;
}

b-navbar-toggle {
  color: #eee;
}
.title{
  color:#eee;
  text-decoration: none;
}
.item-menu{
  margin-left: 15px;
}
#title-lg{
  display: block;
}
.icon-toggle{
  display: table; position: static;
  font-size: 22px;
}
#toggle{
  padding:0;
  border:0;
  margin-right: 5px;
  color:#ffffff;
}

@media screen and (max-width:767px){
  .item-menu{
    margin-left: 0px;
    margin-top:25px;
  }
}

@media screen and (max-width:420px){
 #title-lg{
    font-size: 17px;
  }
}

@media screen and (max-width:325px){
 #title-lg{
    font-size: 15px;
  }
}

@media screen and (max-width:291px){
 #title-lg{
    font-size: 13px;
  }
}
</style>
