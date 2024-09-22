import {AppComponent} from "./app.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule, Routes} from "@angular/router";
import {DisplayhelloworldComponent} from "./components/displayhelloworld/displayhelloworld.component";
import {ShowhellobuttonComponent} from "./components/showhellobutton/showhellobutton.component";
import {CounterComponent} from "./components/counter/counter.component";
import {SimpleformComponent} from "./components/simpleform/simpleform.component";
import {DisplaynameComponent} from "./components/displayname/displayname.component";
import {FormsModule} from "@angular/forms";
import {UserageComponent} from "./components/userage/userage.component";
import {UsergreetingComponent} from "./components/usergreeting/usergreeting.component";
import {CalculatorComponent} from "./components/calculator/calculator.component";
import {TextlengthComponent} from "./components/textlength/textlength.component";
import {CurrencyconverterComponent} from "./components/currencyconverter/currencyconverter.component";
import {EvenoddcheckerComponent} from "./components/evenoddchecker/evenoddchecker.component";
import {WordreverserComponent} from "./components/wordreverser/wordreverser.component";
import {ShowdateComponent} from "./components/showdate/showdate.component";
import {ShowusernameComponent} from "./components/showusername/showusername.component";
import {MultiplicationtableComponent} from "./components/multiplicationtable/multiplicationtable.component";
import {FahrenheittocelsiusComponent} from "./components/fahrenheittocelsius/fahrenheittocelsius.component";
import {BookmarklistComponent} from "./components/bookmarklist/bookmarklist.component";
import {CharactercounterComponent} from "./components/charactercounter/charactercounter.component";
import {PalindromecheckerComponent} from "./components/palindromechecker/palindromechecker.component";
import {SimpleloginComponent} from "./components/simplelogin/simplelogin.component";
import {TemperatureconverterComponent} from "./components/temperatureconverter/temperatureconverter.component";
import {ShoppinglistComponent} from "./components/shoppinglist/shoppinglist.component";
import {FactorialcalculatorComponent} from "./components/factorialcalculator/factorialcalculator.component";
import {TodomanagerComponent} from "./components/todomanager/todomanager.component";
import {GuessnumbergameComponent} from "./components/guessnumbergame/guessnumbergame.component";
import {WordcounterComponent} from "./components/wordcounter/wordcounter.component";
import {RandomnumbergeneratorComponent} from "./components/randomnumbergenerator/randomnumbergenerator.component";
import {MultiplicationcheckerComponent} from "./components/multiplicationchecker/multiplicationchecker.component";
import {UppercaseconverterComponent} from "./components/uppercaseconverter/uppercaseconverter.component";
import {WordshufflerComponent} from "./components/wordshuffler/wordshuffler.component";
import {BmisolverComponent} from "./components/bmisolver/bmisolver.component";
import {UsernamevalidatorComponent} from "./components/usernamevalidator/usernamevalidator.component";
import {InterestcalculatorComponent} from "./components/interestcalculator/interestcalculator.component";
import {CompoundinterestcalculatorComponent} from "./components/compoundinterestcalculator/compoundinterestcalculator.component";
import {FibonaccigeneratorComponent} from "./components/fibonaccigenerator/fibonaccigenerator.component";
import {OddsumcalculatorComponent} from "./components/oddsumcalculator/oddsumcalculator.component";
import {CurrencyformatterComponent} from "./components/currencyformatter/currencyformatter.component";
import {RandomquotedisplayComponent} from "./components/randomquotedisplay/randomquotedisplay.component";
import {UppercasegreetingComponent} from "./components/uppercasegreeting/uppercasegreeting.component";
import {DivisiblecheckerComponent} from "./components/divisiblechecker/divisiblechecker.component";
import {IfelsestatementComponent} from "./components/ifelsestatement/ifelsestatement.component";
import {SwitchcasestatementComponent} from "./components/switchcasestatement/switchcasestatement.component";
import {WhileloopComponent} from "./components/whileloop/whileloop.component";
import {DowhileloopComponent} from "./components/dowhileloop/dowhileloop.component";
import {ForloopComponent} from "./components/forloop/forloop.component";
import {NestedforloopComponent} from "./components/nestedforloop/nestedforloop.component";
import {ForinloopComponent} from "./components/forinloop/forinloop.component";
import {ForofloopComponent} from "./components/forofloop/forofloop.component";
import {BooleancheckerComponent} from "./components/booleanchecker/booleanchecker.component";
import {StringmanipulatorComponent} from "./components/stringmanipulator/stringmanipulator.component";


const routes: Routes = [
  //{path: '', component: AppComponent},
  {path: 'displayhelloworld', component: DisplayhelloworldComponent},
  {path: 'showhellobutton', component: ShowhellobuttonComponent},
  {path: 'displayname', component: DisplaynameComponent },
  {path: 'counter', component: CounterComponent},
  {path: 'simpleform', component: SimpleformComponent},
  {path: 'userage', component: UserageComponent},
  {path: 'usergreeting', component: UsergreetingComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'textlength', component: TextlengthComponent},
  {path: 'currencyconverter', component: CurrencyconverterComponent},
  {path: 'evenoddchecker', component: EvenoddcheckerComponent},
  {path: 'wordreverser', component: WordreverserComponent},
  {path: 'showdate', component: ShowdateComponent},
  {path: 'showusername', component: ShowusernameComponent},
  {path: 'multiplicationtable', component: MultiplicationtableComponent},
  {path: 'simplelogin', component: SimpleloginComponent},
  {path: 'fahrenheittocelsius', component: FahrenheittocelsiusComponent},
  {path: 'bookmarklist', component: BookmarklistComponent},
  {path: 'charactercounter', component: CharactercounterComponent},
  {path: 'palindromechecker', component: PalindromecheckerComponent},
  {path: 'temperatureconverter', component: TemperatureconverterComponent},
  {path: 'shoppinglist', component: ShoppinglistComponent},
  {path: 'factorialcalculator', component: FactorialcalculatorComponent},
  {path: 'todomanager', component: TodomanagerComponent},
  {path: 'guessnumbergame', component: GuessnumbergameComponent},
  {path: 'wordcounter', component: WordcounterComponent},
  {path: 'randomnumbergenerator', component: RandomnumbergeneratorComponent},
  {path: 'multiplicationchecker', component: MultiplicationcheckerComponent},
  {path: 'uppercaseconverter', component: UppercaseconverterComponent},
  {path: 'wordshuffler', component: WordshufflerComponent},
  {path: 'bmisolver', component: BmisolverComponent},
  {path: 'usernamevalidator', component: UsernamevalidatorComponent},
  {path: 'interestcalculator', component: InterestcalculatorComponent},
  {path: 'compoundinterestcalculator', component: CompoundinterestcalculatorComponent},
  {path: 'fibonaccigenerator', component: FibonaccigeneratorComponent},
  {path: 'oddsumcalculator', component: OddsumcalculatorComponent},
  {path: 'currencyformatter', component: CurrencyformatterComponent},
  {path: 'randomquotedisplay', component: RandomquotedisplayComponent},
  {path: 'uppercasegreeting', component: UppercasegreetingComponent},
  {path: 'divisiblechecker', component: DivisiblecheckerComponent},
  {path: 'ifelsestatement', component: IfelsestatementComponent},
  {path: 'switchcasestatement', component: SwitchcasestatementComponent},
  {path: 'whileloop', component: WhileloopComponent},
  {path: 'dowhileloop', component: DowhileloopComponent},
  {path: 'forloop', component: ForloopComponent},
  {path: 'nestedforloop', component: NestedforloopComponent},
  {path: 'forinloop', component: ForinloopComponent},
  {path: 'forofloop', component: ForofloopComponent},
  {path: 'booleanchecker', component: BooleancheckerComponent},
  {path: 'stringmanipulator', component: StringmanipulatorComponent}
]

@NgModule({

  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
  ],

  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelsiusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    TodomanagerComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    IfelsestatementComponent,
    SwitchcasestatementComponent,
    WhileloopComponent,
    DowhileloopComponent,
    ForloopComponent,
    NestedforloopComponent,
    ForinloopComponent,
    ForofloopComponent,
    BooleancheckerComponent,
    StringmanipulatorComponent
  ],

  providers: [

  ],

  bootstrap: [
    AppComponent]
})

export class AppModule {}
