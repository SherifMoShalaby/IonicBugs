# IonicBugs
Repository for ionic v4+ bugs

**Instruction to get it working**
1. clone the repository
2. open folder using cmd or any editor like (visual studio code)
3. write **npm install** command to get the node modules to be able to run the application
4. write **ionic serve** to start the application


**1-**
**Instructions to get the Ion-Item-Sliding bug**
1. run the application
2. slide the item named 'list3' from the right to left and press the + icon button
3. the behavior of the add here is to unshift the current item to the start
4. try to slide the unshifted item at the index 0 from the right, it will not

**Expected behavior**
- should be **slidable**


**2-**
**Instructions to get the ion-select bug**
1. run the application
2. press the ion-select component and choose two or more, then press the ok button
3. the choosen items will not be reflected
4. you have to opeh the ion-select one more time and choose the same selection before then press the ok

**Expected behavior**
- should be working from first selection without no problems
