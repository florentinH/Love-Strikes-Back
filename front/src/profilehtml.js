const profilehtml = () => /* @html */`
<h2>Deviens un vrai Jedi de l'amour</h2>
<form id="form-profile" method="POST" action="/update-profile">
  <div class="form-group row">
    <label for="age" class="col-sm-2 col-form-label">Quel age as-tu ?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="age" name="age" placeholder="150">
    </div>
  </div>
  <div class="form-group row">
    <label for="job" class="col-sm-2 col-form-label">Que fais-tu dans la vie ?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="job" name="job" placeholder="Padawan">
    </div>
  </div>
  <div class="form-group row">
    <label for="description" class="col-sm-2 col-form-label">Qui es-tu ?</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="description" name="description" placeholder="Salut ! Je suis Germain, passionné d'art martiaux !">
    </div>
  </div>
</form>
<input form="form-profile" type="submit" class="btn btn-primary" value="Valider">

`

/*

<div class="form-group row">
  <label for="leitimov" class="col-sm-2 col-form-label">Ta réplique préférée de Star Wars :</label>
  <div class="col-sm-10">
    <select id="leitimov" name="leitimov" class="form-control">
     <option value=""La force sera avec toi, toujours." - Ben Kenobi">"La force sera avec toi, toujours." - Ben Kenobi</option>
     <option value=""Plutôt embrasser un wookie!" - Leia Organa">"Plutôt embrasser un wookie!" - Leia Organa</option>
     <option value=""Non, je suis ton père." - Dark Vador">"Non, je suis ton père." - Dark Vador</option>
     <option value=""Il y en a toujours un pour manger l'autre" - Qui-Gon Jinn">"Il y en a toujours un pour manger l'autre" - Qui-Gon Jinn</option>
     <option value=""La peur est le chemin vers le côté obscur: la peur mène à la colère,  le colère mène à la haine, la haine mène à la souffrance." - Yoda">"La peur est le chemin vers le côté obscur: la peur mène à la colère,  le colère mène à la haine, la haine mène à la souffrance." - Yoda</option>
     <option value=""Tu ne vends pas de bâtons de la mort, tu vas rentrer chez toi et penser à ton avenir." - Obi-Wan Kenobi">"Tu ne vends pas de bâtons de la mort, tu vas rentrer chez toi et penser à ton avenir." - Obi-Wan Kenobi</option>
     <option value=""Même si notre armement est assez puissant pour détruire une planète, il est bien peu de chose en comparaison de la Force" - Dark Vador">"Même si notre armement est assez puissant pour détruire une planète, il est bien peu de chose en comparaison de la Force" - Dark Vador</option>
     <option value=""C''est donc ainsi que s''achève la liberté, sous un tonnerre d''applaudissements." - Padmé Amidala">"C''est donc ainsi que s''achève la liberté, sous un tonnerre d''applaudissements." - Padmé Amidala</option>
     <option value=""Chewie, on est à la maison." - Han Solo" selected>"Chewie, on est à la maison." - Han Solo</option>
   </select>
  </div>
</div>
*/

module.exports=profilehtml
