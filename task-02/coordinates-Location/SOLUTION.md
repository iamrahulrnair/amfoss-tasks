I have listed all the commands in order,

**_firstPart_**

- [ ] mkdir Coordinates-Location
- [ ] cd Coordinates-Location
- [ ] mkdir North && cd North
- [ ] touch NDegree.txt
- [ ] echo "9°">> NDegree.txt
- [ ] touch NMinutes.txt
- [ ] echo "5'">> NMinutes.txt
- [ ] mkdir NSeconds.txt
- [ ] echo '38"'>>NSeconds.txt
- [ ] cat NDegree.txt NMinutes.txt NSeconds.txt > NorthCoordinate.txt
- [ ] mv NorthCoordinate.txt ../
- [ ] mv NorthCoordinate.txt North.txt

  **_secondPart_**

- [ ] mkdir East && cd East
- [ ] touch EDegree.txt
- [ ] echo "76°">> EDegree.txt
- [ ] touch NMinutes.txt
- [ ] echo "29'">> EMinutes.txt
- [ ] mkdir NSeconds.txt
- [ ] echo '30"'>> ESeconds.txt
- [ ] cat EDegree.txt EMinutes.txt ESeconds.txt > EastCoordinate.txt
- [ ] mv EastCoordinate.txt ../
- [ ] mv EastCoordinate.txt East.txt

**_gitCommands_**

- [ ] git add .
- [ ] git commit -m "complete task-02"
- [ ] git push origin main
