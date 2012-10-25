//
//  ViewController.h
//  AOC2_Wk3
//
//  Created by Brandon Sease on 10/8/12.
//  Copyright (c) 2012 Brandon Sease. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "AddEventViewController.h"

@interface ViewController : UIViewController <eventViewDelegate>
{
    IBOutlet UITextView *textView;
    NSMutableString *eventString;
    IBOutlet UILabel *swipeRightLable;
    UISwipeGestureRecognizer *rightSwiper;
    
}
-(IBAction)onClick:(id)sender;
-(void)printEvents:(NSMutableString*)eventList;

@end
