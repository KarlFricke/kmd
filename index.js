var begriffe = new Array("A2.1 seitea.htm#a2-1","Birnbaum seiteb.htm#birne","Zausel seitez.htm#zaus");
function lade()
{
   nummer=window.document.suche.angebot.selectedIndex;
   if(nummer&gt,0)
   {
        seite=window.document.suche.angebot.options[nummer].value;
        self.location.href=seite;
   }
}
