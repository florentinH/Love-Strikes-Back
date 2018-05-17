const profilehtml = () => `
<h2>Deviens un vrai Jedi de l'amour</h2>
<form>
  <div class="form-group row">
    <label for="age" class="col-sm-2 col-form-label">Quel age as-tu ?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="age" placeholder="150">
    </div>
  </div>
  <div class="form-group row">
    <label for="job" class="col-sm-2 col-form-label">Que fais-tu dans la vie ?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="job" placeholder="Padawan">
    </div>
  </div>
  <div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label">Qui es-tu ?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="description" placeholder="Salut ! Je suis Germain, passionné d'art martiaux !">
    </div>
  </div>
  <div class="form-group row">
    <label for="leitimov" class="col-sm-2 col-form-label">Ta réplique préférée de Star Wars :</label>
    <div class="col-sm-10">
      <select id="leitimov" name="leitimov" class="form-control">
       <option value="1">"La force sera avec toi, toujours." - Ben Kenobi</option>
       <option value="2">"Plutôt embrasser un wookie!" - Leia Organa</option>
       <option value="3">"Non, je suis ton père." - Dark Vador</option>
       <option value="4">"Il y en a toujours un pour manger l'autre" - Qui-Gon Jinn</option>
       <option value="5">"La peur est le chemin vers le côté obscur: la peur mène à la colère,  le colère mène à la haine, la haine mène à la souffrance." - Yoda</option>
       <option value="6">"Tu ne vends pas de bâtons de la mort, tu vas rentrer chez toi et penser à ton avenir." - Obi-Wan Kenobi</option>
       <option value="7">"Même si notre armement est assez puissant pour détruire une planète, il est bien peu de chose en comparaison de la Force" - Dark Vador</option>
       <option value="8">"C''est donc ainsi que s''achève la liberté, sous un tonnerre d''applaudissements." - Padmé Amidala</option>
       <option value="9" selected>"Chewie, on est à la maison." - Han Solo</option>
    </div>
  </div>
</form>
`

module.exports=profilehtml
