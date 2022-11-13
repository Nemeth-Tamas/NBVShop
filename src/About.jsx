import React from 'react'
import { Linking, StyleSheet, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Appbar, Button, Card, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
  }
});

const About = () => {
  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.Content title="About" />
      </Appbar.Header>
      <Card style={styles.card}>
        <Card.Title title="Know before buying" />
        <Card.Content>
          <Text>
          A webáruházunkban található termékeket bemutató képeket a lehetőségeink szerint a valóságos kinézetüket legjobban visszaadó formában tesszük közzé, de természetesen lehetnek kisebb eltérések.
Az oldalunkon forgalmazott termékeket természetes eredetű ásványokból, egyedileg, saját elképzelésünk alapján, saját kezűleg készítjük lányommal. Ebből adódóan közöttük nincs két teljesen egyforma, de ha kérés érkezik, és van az adott ásványból készlet, teljesítjük az egyedi kéréseket is.
Igyekszünk a legjobb minőségű termékeket biztosítani a Felhasználó(k) számára, de mivel a termékek többsége természetes ásvány vagy azokból készült termék, ezért ennél fogva lehetnek bennük természetes „hibák” pl. zárványok, nem egyenletes színezet, eltérő mintázat, repedések stb. Ilyen eltérések, természetes hibák miatt reklamációt nem tudunk elfogadni. Ezek a természetes, sokszor szabad szemmel nem látható „hibák”, a legtöbbször segítik a szakembert a kő valódiságának a megállapításában.
Egyes természetes anyagok (ásványok között pl. roppantott ásványok, angelit, szelenit, rózsakvarc, korall, színezett gyöngyök stb.) érzékenyek lehetnek külső behatásokra (pl. ütődés, kopás, vegyi és egyéb anyagokra pl. izzadtság, erős fényhatás stb.) ezért az így keletkező változásokért (törés, szín, fényesség stb.) nem vállalunk garanciát.
Termékeink nem rendeltetésszerű használatából eredő hibákért felelősséget nem vállalunk, ilyen esetben reklamációt nem tudunk elfogadni.
Mivel igény van rá kínálatunkban szerepel néhány szintetikus, festett, vagy egyéb módon kezelt kő is, ilyen esetekben ezt a termék leírásánál, mindig jelezzük.
A webáruház szolgáltatója több éves szakmai tapasztalattal rendelkezik, a legjobb tudása szerint igyekszik a kövek valódiságát garantálni.
Termékeinknél mindig szerepel egy rövid leírás, de ha többet szeretne megtudni róluk, elérhetőségeinken keresztül is természetesen szívesen segítünk.
          </Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Facebook" />
        <Card.Content>
          <Text>
            Check out our facebook page for more information
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button icon="facebook" onPress={() => {
            Linking.openURL('https://www.facebook.com/NBVAsvanyEkszer');
          }}>Facebook</Button>
        </Card.Actions>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="ÁSZF" />
        <Card.Content>
          <Text>
            You can read the data protection guidelines and general terms and conditions at the link below
          </Text>
        </Card.Content>
        <Card.Actions>
          <Button icon="file-document-edit-outline" onPress={() => {
            Linking.openURL('https://nbvasvanyekszer.hu/aszf/');
          }}>ÁSZF</Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  )
}

export default About