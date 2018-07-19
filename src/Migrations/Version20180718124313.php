<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20180718124313 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE actionnaire DROP FOREIGN KEY FK_2FA91B4E1224ABE0');
        $this->addSql('ALTER TABLE department DROP FOREIGN KEY FK_CD1DE18A1224ABE0');
        $this->addSql('CREATE TABLE company (id INT AUTO_INCREMENT NOT NULL, domain_id INT DEFAULT NULL, legal_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, seat VARCHAR(255) DEFAULT NULL, city VARCHAR(255) DEFAULT NULL, website VARCHAR(255) DEFAULT NULL, slug VARCHAR(255) DEFAULT NULL, INDEX IDX_4FBF094F115F0EE5 (domain_id), INDEX IDX_4FBF094F62BB3C59 (legal_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shareholder (id INT AUTO_INCREMENT NOT NULL, company_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, part VARCHAR(255) DEFAULT NULL, INDEX IDX_D5FE68CC979B1AD6 (company_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE company ADD CONSTRAINT FK_4FBF094F115F0EE5 FOREIGN KEY (domain_id) REFERENCES domain (id)');
        $this->addSql('ALTER TABLE company ADD CONSTRAINT FK_4FBF094F62BB3C59 FOREIGN KEY (legal_id) REFERENCES legal (id)');
        $this->addSql('ALTER TABLE shareholder ADD CONSTRAINT FK_D5FE68CC979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('DROP TABLE actionnaire');
        $this->addSql('DROP TABLE compagny');
        $this->addSql('DROP INDEX IDX_CD1DE18A1224ABE0 ON department');
        $this->addSql('ALTER TABLE department CHANGE compagny_id company_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE department ADD CONSTRAINT FK_CD1DE18A979B1AD6 FOREIGN KEY (company_id) REFERENCES company (id)');
        $this->addSql('CREATE INDEX IDX_CD1DE18A979B1AD6 ON department (company_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE department DROP FOREIGN KEY FK_CD1DE18A979B1AD6');
        $this->addSql('ALTER TABLE shareholder DROP FOREIGN KEY FK_D5FE68CC979B1AD6');
        $this->addSql('CREATE TABLE actionnaire (id INT AUTO_INCREMENT NOT NULL, compagny_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, part VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, INDEX IDX_2FA91B4E1224ABE0 (compagny_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE compagny (id INT AUTO_INCREMENT NOT NULL, domain_id INT DEFAULT NULL, legal_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, seat VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, city VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, website VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, slug VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, client_market LONGTEXT NOT NULL COLLATE utf8_unicode_ci, objectif LONGTEXT NOT NULL COLLATE utf8_unicode_ci, strategie LONGTEXT NOT NULL COLLATE utf8_unicode_ci, besoin LONGTEXT NOT NULL COLLATE utf8_unicode_ci, content LONGTEXT NOT NULL COLLATE utf8_unicode_ci, product_service LONGTEXT NOT NULL COLLATE utf8_unicode_ci, concurrent LONGTEXT NOT NULL COLLATE utf8_unicode_ci, INDEX IDX_17A57A04115F0EE5 (domain_id), INDEX IDX_17A57A0462BB3C59 (legal_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE actionnaire ADD CONSTRAINT FK_2FA91B4E1224ABE0 FOREIGN KEY (compagny_id) REFERENCES compagny (id)');
        $this->addSql('ALTER TABLE compagny ADD CONSTRAINT FK_17A57A04115F0EE5 FOREIGN KEY (domain_id) REFERENCES domain (id)');
        $this->addSql('ALTER TABLE compagny ADD CONSTRAINT FK_17A57A0462BB3C59 FOREIGN KEY (legal_id) REFERENCES legal (id)');
        $this->addSql('DROP TABLE company');
        $this->addSql('DROP TABLE shareholder');
        $this->addSql('DROP INDEX IDX_CD1DE18A979B1AD6 ON department');
        $this->addSql('ALTER TABLE department CHANGE company_id compagny_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE department ADD CONSTRAINT FK_CD1DE18A1224ABE0 FOREIGN KEY (compagny_id) REFERENCES compagny (id)');
        $this->addSql('CREATE INDEX IDX_CD1DE18A1224ABE0 ON department (compagny_id)');
    }
}
