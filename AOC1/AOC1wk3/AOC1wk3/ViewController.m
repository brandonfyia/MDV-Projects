//
//  ViewController.m
//  AOC1wk3
//
//  Created by Brandon Sease on 8/16/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

// 1. Additon function

- (int)add:(NSInteger)firstNum secondNum:(NSInteger)secondNum
{
    return firstNum + secondNum;
}

// 2. BOOL function

- (BOOL)compare:(NSInteger)uno dose:(NSInteger)dose
{
    return (uno == dose);
}

// 3. Append function

- (NSString*)append:(NSString*)firstS secondString:(NSString*)secondS
{
    NSMutableString *muteS = [[NSMutableString alloc]initWithString:firstS];
    [muteS appendString:secondS];
    return muteS;
}

// 5. Display Alert With String Function
- (void)displayAlertWithString:(NSString*)alertS
{
    UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Hey!" message:alertS delegate:nil cancelButtonTitle:@"OK" otherButtonTitles: nil];
    [alert show];
}



- (void)viewDidLoad
{
// 4. Call append function
    
    NSString *alertS =[self append:@"Strings" secondString:@" and things!"];
    [self displayAlertWithString:alertS];
    
// 6. Call add function
    
    int sum = [self add:300 secondNum:1];
    
// 7. Send add result to alert
    
    NSNumber *newNum = [NSNumber numberWithInt:sum];
    NSString *newNumString = [newNum stringValue];
    
// 8. Add title and add int
    
    NSString *alert = [self append:@"The Number is " secondString:newNumString];
    [self displayAlertWithString:alert];
    
// 9. Display compare function
    
    NSInteger booly1 = 59;
    NSInteger booly2 = 59;
    BOOL isSame = [self compare:booly1 dose:booly2];
    
    if (isSame != NO)
    {
        NSString *alert = [NSString stringWithFormat:@"Is the number %d equal to the number %d ? Answer: %@", booly1, booly2, isSame?@"YES":@"NO"];
        [self displayAlertWithString:alert];
    }
    
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [super viewDidUnload];
    // Release any retained subviews of the main view.
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

@end
