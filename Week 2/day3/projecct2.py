import random
import time

class main:
    def load_message():
        intro = """
        Welcome to the game of Helios!
        This is a turn-based RPG that puts your skills to the test.
        Will you fight and conquer, or run and fight another day?
        Options include fighting, using items, or running. 
        Successful fights have the chance to drop items that will make later battles easier.
        After day three, the boss will arrive and give you the option to fight.
        At anytime, feel free to press 'q' to give up and quit the game.
        Good luck, you'll need it.

      ,    ,    /\   /
     /( /\ )\  _\ \_/ /_
     |\_||_/| < \_   _/ >
     \______/  \|0   0|/
       _\/_   _(_  ^  _)_
      ( () ) /`\|V"''"V|/`
        ()   \  \_____/  /
        ()   /\   )=(   /
        ()  /  \_/\=/\_/  


    """
        return print(intro)
    
class randStats():
    def __init__(self, arm, mr, dmg, hp):
        self.arm = arm
        self.mr = mr
        self.dmg = dmg
        self.hp = hp
    
    def statistics(self):
        self.arm = random.randint(2,9)
        self.mr = random.randint(2,9)
        self.dmg = random.randint(5,10)
        self.hp = random.randint(50,100)
        listOfItems = ["Health Pot", "Armor Boost","MR Boost", "DMG Orb"]
        self.ranItem = listOfItems[random.randint(0,3)]
        

class items():
    def __init__(self, HealthPot, ArmorBoost, MRBoost, DMGOrb):
        self.HealthPot = HealthPot
        self.ArmorBoost = ArmorBoost
        self.MRBoost = MRBoost
        self.DMGOrb = DMGOrb
    def healthPot(self):
        self.HealthPot += hero.hp
        hero.hp += 20
        print("New hp = " + str(hero.hp))
    def armorBoost(self):
        self.ArmorBoost = hero.arm
        hero.arm += 3
        print("New armor = " + str(hero.arm))
    def mrBoost(self):
        self.MRBoost = hero.mr
        hero.mr += 3
        print("New MR = " + str(hero.mr))
    def dmgOrb(self):
        self.DMGOrb = hero.dmg
        hero.dmg += 10
        print("New DMG = " + str(hero.dmg))

class fightMenu():

    def menu():
        turn = True
        fight = True
        while fight == True:
            
            while turn == True:
                userInput = input("""
              What do you do?
              
              Attack->
              
              Use Item->
              
              Flee->
              
              """)
                if userInput == "Attack":
                    if enemy.arm >= hero.dmg:
                        print("Your attacks do nothing to this creature, you should run!")
                        turn = False
                    else:
                        enemy.hp -= (hero.dmg - enemy.arm)
                        print(f"\n\nThe enemy took %s damage!\n\n" % (hero.dmg - enemy.arm))
                        print("Enemy hp = " + str(enemy.hp) + " remaining\n")
                        turn = False
                    if enemy.hp <= 0:
                        print("The enemy has been slain!\n\n")
                        turn = False
                        fight = False
                        hero.ranItem = hero.ranItem + ", " + hero.ranItem
                elif userInput == "Use Item":
                    inputItem = input("\nWhat item would you like to use: " + hero.ranItem + "\n\n")
                    if inputItem == hero.ranItem:
                        #take in item info and activate function
                        if inputItem == "Health Pot":
                            items.healthPot(hero)
                            
                        elif inputItem == "Armor Boost":
                            items.armorBoost(hero)
                            
                        elif inputItem == "MR Boost":
                            items.mrBoost(hero)
                            
                        elif inputItem == "DMG Orb":
                            items.dmgOrb(hero)
                            
                    elif inputItem != hero.ranItem:
                        print("You aren't that bright are you, the enemy attacks while you scramble through your bag.\n")        
                    turn = False
                    
                elif userInput == "Flee":
                    hero.hp = 0
                    print("\nAs you run away the enemy stabs you in the back, ending your journey.\n")
                    fight = False
                    break
                else:
                    print("\nA simple task by many, failed by you. Lose your turn.\n")
                    turn = False
                
            while turn == False:
                time.sleep(3)
                print("The enemy lunges forward and swings its weapon!")
                if hero.arm >= enemy.dmg:
                    print("The enemy's attack barely scratched you!")
                    turn = True
                    pass
                else:    
                    hero.hp -= (enemy.dmg - hero.arm)
                    print(f"\n\nYou took %s damage!\n\n" % (enemy.dmg - hero.arm))
                    print("Hero hp = " + str(hero.hp) + " remaining")
                    turn = True
                    if enemy.hp <= 0:
                        print("You have been slain!\n\n")
                        fight = False
    
class battleAnimation():
    def arrow():
        print("""
              
      O                                     O
{o)xxx|===============-  *  -===============|xxx(o}
      O                                     O
              
              """)

class EndCredits():
        def credits():
            time.sleep(3)
            print("Created by: Dustin Clisbee\n")
            time.sleep(3)
            print("Coded by: Dustin Clisbee\n")
            time.sleep(3)
            print("People to beat game so far: Dustin Clisbee")
            time.sleep(3)
            print("""
                  
       ___,---.__          /'|`\          __,---,___
    ,-'    \`    `-.____,-'  |  `-.____,-'    //    `-.
  ,'        |           ~'\     /`~           |        `.
 /      ___//              `. ,'          ,  , \___      \\
|    ,-'   `-.__   _         |        ,    __,-'   `-.    |
|   /          /\_  `   .    |    ,      _/\          \   |
\  |           \ \`-.___ \   |   / ___,-'/ /           |  /
 \  \           | `._   `\\  |  //'   _,' |           /  /
  `-.\         /'  _ `---'' , . ``---' _  `\         /,-'
     ``       /     \    ,='/ \`=.    /     \       ''
             |__   /|\_,--.,-.--,--._/|\   __|
             /  `./  \\`\ |  |  | /,//' \,'  \\
            /   /     ||--+--|--+-/-|     \   \\
           |   |     /'\_\_\ | /_/_/`\     |   |
            \   \__, \_     `~'     _/ .__/   /
             `-._,-'   `-._______,-'   `-._,-'
            
            
            """)
            
hero = randStats       
enemy = randStats
item = items
game = True

main.load_message()
hero.statistics(hero)
print(f"Your starting stats are: Armor: %s MR: %s DMG: %s HP: %s ITEM: %s" % (hero.arm, hero.mr, hero.dmg, hero.hp, hero.ranItem))
time.sleep(3)
while game == True: 
    print("\n\n\nAn enemy approaches!\n\n\n")
    time.sleep(3)
    battleAnimation.arrow()
    time.sleep(3)
    fightMenu.menu()
    
    if hero.hp <= 0:
        game = False
    
EndCredits.credits()
