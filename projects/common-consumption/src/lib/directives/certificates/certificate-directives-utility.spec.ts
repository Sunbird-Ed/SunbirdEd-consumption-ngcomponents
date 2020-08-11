import {CertificateDirectivesUtility} from './certificate-directives-utility';

describe('CertificateDirectivesUtility', () => {
  describe('appendGhostCanvas', () => {
    const testId = 'testId';

    afterEach(() => {
      document.getElementById('testId').remove();
    });

    it('should create a hidden ghost canvas element as a child of body', () => {
      CertificateDirectivesUtility.appendGhostCanvas(testId, {width: 1024, height: 768});

      expect(document.getElementById('testId')).toBeTruthy();
    });
  });

  describe('transposeTemplate', () => {
    it('should transpose values for all provided metadata', () => {
      const result1 = CertificateDirectivesUtility.transposeTemplate('This is a test to replace $certificateName but not $recipientName', {
        certificateName: 'TEST_USER'
      });

      expect(result1).toEqual('This is a test to replace TEST_USER but not $recipientName');

      const result2 = CertificateDirectivesUtility.transposeTemplate('This is a test to ignore $certificateName but not $recipientName', {
        recipientName: 'TEST_USER'
      });

      expect(result2).toEqual('This is a test to ignore $certificateName but not TEST_USER');
    });
  });
});
