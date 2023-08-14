<template>
    <h1>Hello {{ name }}</h1>
  <div>this is a vue application: {{ greet }}</div>
  <div v-text="channel"></div>
  <div v-html="forname"></div>
  <h2 v-bind:id="headingId">Heading</h2>
  <h1 v-bind:class="statuS">Status</h1>
  <h2 v-bind:class="isPromoted && 'promoted'">promoted movied</h2>
  <h2 v-bind:class="isSoldout ? ['soldout', 'undereline'] : 'new'">
    promoted movied
  </h2>

  <!-- {
    promoted: isPromoted,
    new: !isSoldout,
    'sold-out':

  } -->
  <h2
    v-bind:class="{
      promoted: isPromoted,
      new: !isSoldout,
      'sold-out': isSoldout,
    }"
  >
    Status
  </h2>
  <h2
    v-bind:style="{
      color: highlightColor,
      fontSize: headerSize + 'px',
      padding: '20px',
    }"
  >
    Inline Style
  </h2>
  <h2 :style="headerStyleObject">Object Style</h2>

  <div v-if="num === 0">The number is zero</div>
  <div v-else-if="num < 0">The number is negative</div>
  <div v-else-if="num > 0">The number is positive</div>
  <div v-else>The num is not zero</div>
  <div v-if="display">
    <h2>Vishwas</h2>
    <h2>Codevolution</h2>
    <h2>vue</h2>
  </div>
  <div v-show="showElement">show element</div>
  <ul>
    <li v-for="(name, index) in names" v-bind:key="index">
      {{ index }} - {{ name }}
    </li>
  </ul>

  <ul>
    <li v-for="name in fullNames" :key="name.id">
      {{ name.first }} - {{ name.last }}
    </li>
  </ul>

  <hr />

  <ul>
    <template v-for="name in fullNames" :key="name.id">
      <li v-if="name.first !== 'Bruce'">{{ name.first }} - {{ name.last }}</li>
    </template>
  </ul>

  <ul v-for="actor in actors" :key="actor.name">
    <li>
      {{ actor.name }} -
      <ul>
        <li v-for="movie in actor.movies" :key="movie">{{ movie }}</li>
      </ul>
    </li>
  </ul>
  <ul>
    <li v-for="(value, key, index) in myInfo" :key="key">
      {{ index }} - {{ key }} - {{ value }}
    </li>
  </ul>

  <h2>{{ 2 + 3 + 5 }}</h2>
  <h2>add method - {{ add() }}</h2>
  <h2>multiply method - {{ multiply(20) }}</h2>

  <div>
    <h2 >{{ count }}</h2>
    <!-- v-pre, v-once -->
    <div>{{ name }}</div>
    <button v-on:click="increment($event)">increment</button>
    <button @click="decrement()" v-once>decrement</button>
    <button @click="changeName">changeName</button>
  </div>

  <div>
    <pre>
      {{ JSON.stringify(formValue, null, 2) }}
    </pre>
  </div>
  <form @submit="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.trim.lazy="formValue.name" />
      <!--lazy improve performance-->
    </div>
    <div>
      <label for="Profile">Profile Summary</label>
      <textarea id="Profile" v-model="formValue.profileSummary"></textarea>
    </div>

    <div>
      <label for="country">country</label>
      <select id="country" v-model="formValue.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapor">Singapor</option>
      </select>
    </div>

    <div>
      <label for="jobLocation">Job Location</label>
      <select id="jobLocation" multiple v-model="formValue.jobLocation">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapor">Singapor</option>
      </select>
    </div>

    <div>
      <input type="checkbox" id="remoteWork" v-model="formValue.remoteWork" />
      <label for="remoteWork">Open to remote work?</label>
    </div>

    <div>
      <label>Skill set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        v-model="formValue.skillSet"
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        v-model="formValue.skillSet"
      />
      <label for="css">Css</label>
      <input
        type="checkbox"
        id="javascript"
        value="javascript"
        v-model="formValue.skillSet"
      />
      <label for="javascript">javascript</label>
    </div>
    <div>
        <label>years of Experience</label>
        <input type="radio" id="0-2" value="0-2" v-model="formValue.yearOfExperience" />
        <label for="0-2">0-2</label>
        <input type="radio" id="3-5" value="3-5" v-model="formValue.yearOfExperience" />
        <label for="3-5">3-5</label>
        <input type="radio" id="5-10" value="5-10" v-model="formValue.yearOfExperience" />
        <label for="5-10">5-10</label>
        <input @keyup:enter="submitForm" type="number" id="age" v-model.number="formValue.age">
    </div>
    <div>
        <button>Submit</button>
    </div>
  </form>

  <h2>Total - {{ items.reduce((total, curr) => (total = total + curr.price), 0) }}</h2>
  <h2>Computed Total - {{ computedTotal }}</h2>
  <button v-on:click="incrementPHONEPrice">increment</button>

  <div>Volume: {{ volume }}</div>
  <button @click="volume += 1">increment volume</button>
  <button @click="volume -= 1">decrement volume</button>
  <input type="text" v-model="movie" >
  <input type="text" v-model="movieInfo.name">
  <input type="text" v-model="movieInfo.description">

  <button @click="movieList = movieList.concat(movie)">add movie</button>
</template>

<script>
export default {
    name: "FormComponent",
    data() {
    return {
      name: "Vishwas",
      greet: "hello",
      channel: "CodeVolution",
      forname: "<b>CodeV</b>",
      headingId: "heading",
      statuS: "danger",
      isPromoted: true,
      isSoldout: false,
      highlightColor: "orange",
      headerSize: 50,
      headerStyleObject: {
        color: this.highlightColor,
        fontSize: "20px",
        padding: "20px",
      },

      num: 2,
      display: false,
      showElement: false,
      names: ["Bruce", "Clark", "Diana"],
      fullNames: [
        { id: 1, first: "Bruce", last: "Wayne" },
        { id: 0, first: "Clark", last: "Kent" },
        { id: 2, first: "Princess", last: "Diana" },
      ],
      actors: [
        {
          name: "Christan Bale",
          movies: ["Batman", "The Prestige"],
        },
        {
          name: "Di Caprio",
          movies: ["Batman", "Inception"],
        },
      ],
      myInfo: {
        name: "washKey",
        work: "vue",
      },
      baseMultiplier: 5,

      count: 0,

      formValue: {
        name: "",
        profileSummary: "",
        country: "",
        jobLocation: [],
        remoteWork: false,
        skillSet: [],
        yearOfExperience: "",
        age: 0
      },

      items: [
        {
            id: 1,
            title: "TV",
            price: 100
        },
        {
            id: 2,
            title: "PHONE",
            price: 200
        },
        {
            id: 3,
            title: "LAPTOP",
            price: 300
        }
      ],
      volume: 0,
      movie: "",
      movieInfo: {
        name: "",
        description: ""
      },
      movieList: []
    };

  },
  methods: {
    add() {
      return 2 + 3 + 5;
    },
    multiply(num) {
      return num * this.baseMultiplier;
    },
    increment(event) {
      this.count++;
      console.log(event);
    },
    decrement() {
      this.count--;
    },
    changeName(event) {
      this.name = "logust";
      console.log(event);

    },
    submitForm(event){
        event.preventDefault();
        console.log(JSON.stringify(this.formValue, null, 2));
        // ajax
    },
    incrementPHONEPrice(){
        this.items[1].price++;
    }
  },
  computed: {
    composeName(){
        return `{}`;
    },
    computedTotal(){
        var total = this.items.reduce((total, curr) => (total = total + curr.price), 0);
        return total;
    },

  },
  watch: {
    volume(newValue, oldValue) {
        if(newValue > oldValue && newValue == 16){
            alert("too high");
        }
    },
    movie(newValue){
        console.log(newValue);
    },
    movieInfo: {
        handler(newValue){
          console.log(`movename = ${newValue.name}, description= ${newValue.description}`);
        },
        deep: true,
        immediate: true
    },
    movieList: {
        handler(newValue){
            console.log(`movename = ${newValue[newValue.length - 1]} added in movieList`);
            newValue.map((x, i)=>{
                console.log(x, i);
            });

            },

            deep: true

    }


  }
};
</script>
